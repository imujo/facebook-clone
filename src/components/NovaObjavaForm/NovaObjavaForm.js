import React, {useState} from 'react'
import './NovaObjavaForm.css'
import { GrFormClose } from "react-icons/gr";
// import objave from '../../data';

const NovaObjavaForm = ({setNovaObjavaOpen, id, oldTitle, oldDescription, oldImageUrl, option}) => {

    const [title, setTitle] = useState(oldTitle)
    const [desc, setDesc] = useState(oldDescription)
    const [imgUrl, setImgUrl] = useState(oldImageUrl)

    const nObjava = () => {
        fetch('http://localhost:5000/nobjava', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                title: title,
                description: desc,
                imageUrl: imgUrl
            })
        })
    }

    const Edit = (id) => {
        fetch(`http://localhost:5000/objava/${id}`, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                title: title,
                description: desc,
                imageurl: imgUrl
            })
        })
    }

    const name = () => {
        if (option === 'nobjava'){
            return 'Nova objava'
        }else{
            return 'Uredi objavu'
        }
    }
    

    const onSubmit = () => {
        if (option === 'nobjava'){
            return nObjava();
        }else{
            return Edit(id);
        }
    }
    
    
    
    

    return(
        <div className="novaObjavaBody floatingCenter">
            <div className="titleArea">
                <h1 className='formH1'>{name()}</h1>
                <div className="close" onClick={()=>setNovaObjavaOpen(false)} > <GrFormClose size='25px'/></div>
                
            </div>
            <form className='novaObjavaForm' >
                <div className="titleFormDiv">
                    <label className='titleFormLabel' htmlFor="title">Title</label>
                    <input value={title} className='formBorder' type="text" required name='title' id='title' onChange={(action)=>setTitle(action.target.value) } />
                </div>
                <div className="descFormDiv">
                    <label htmlFor="desc">Description</label>
                    <textarea value={desc} className='formBorder' name='desc' id='desc' onChange={(action)=>setDesc(action.target.value)} />
                </div>
                <div className="imageUrlFormDiv">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input value={imgUrl} className='formBorder' type="text" name='imageUrl' id='imageUrl'  onChange={(action)=>setImgUrl(action.target.value)} />
                </div>
                <div className="buttonsDiv">
                    <input className='submit formBorder' type="submit" name='Submit' onClick={()=>onSubmit()} />
                    <input type='reset' value='Delete' className='delete formBorder' ></input>
                </div>
            </form>
    </div>
    )
}

export default NovaObjavaForm;

// 