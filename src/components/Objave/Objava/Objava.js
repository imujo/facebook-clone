import React, {useState, useEffect, useRef} from 'react';
import './Objava.css';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import Delete from '../Delete/Delete';
import NovaObjavaForm from '../../NovaObjavaForm/NovaObjavaForm'


function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map((str, i)=>{
        if (str.length === 0){
            return <br key={i}/>
        }else{
            return <div key={i} className="whitespace">{str}</div>
        }
    });
    return newText;
  }



const Objava = ({ title, description, imageUrl, date, id}) => {
    const [showMore, toggleShowMore] = useState(false);
    const [editButtonsOpen, setEdisButtonsOpen] = useState(false);
    const [showEditObjava, setEditObjava] = useState(false);
    const dropdownRef = useRef(null);
    const [delForm, setDelForm] = useState(false);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setEdisButtonsOpen(!editButtonsOpen);
            }
          };

        if (editButtonsOpen) {
          window.addEventListener('click', pageClickEvent);
        }
      
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
    }, [editButtonsOpen]);


    let desc = '';
    let showMoreText = '';
    
    if (description === null){
        desc = '';
    }
    else if (description.length < 100 ){
        desc = description;
    }else{
        if (showMore === false){
            showMoreText = 'Show more';
            desc = description.substring(0, 100) + '...';
        }else{
            showMoreText = 'Show less';
            desc = description;
        }
    }
    


    return (
        <div className="objavaBody">
            
            <div className="info">
                <p className='date'>{new Date(date).toDateString()}</p>
                {editButtonsOpen
                    ? <div ref ={dropdownRef} className="editButtons">
                        <button className='edit buttonNone' onClick={()=>setEditObjava(!showEditObjava)} >edit</button>
                        <button className='deleteBtn buttonNone' onClick={()=>setDelForm(!delForm)} >delete</button>
                    </div>
                    : <div></div>
                }
                <div className="editObjava" onClick={()=>setEdisButtonsOpen(true)} ><BiDotsVerticalRounded color='white' size={25}/></div>
            </div>
            <h3>{title}</h3>
            <div className='objavaDescription'><NewlineText text = {desc} /></div>
            <p className='showMore' onClick={()=>toggleShowMore(!showMore)}>{showMoreText}</p>
            
            {
                imageUrl ?
                <img src={imageUrl} alt="url not found"/>
                :
                <br/>
            }

            {
                delForm ?
                <Delete setDelForm={setDelForm} id={id} />
                :
                <div></div>
            }

            {
                showEditObjava ?
                <NovaObjavaForm 
                    setNovaObjavaOpen={setEditObjava} 
                    id={id}
                    oldTitle={title}
                    oldDescription = {description}
                    oldImageUrl = {imageUrl}
                    option='edit' 
                />
                :
                <div></div>
            }

        </div>
    )
}

export default Objava;
