import React, {useState} from 'react';
import './Objava.css';
import {BiDotsVerticalRounded} from 'react-icons/bi';

const Objava = ({ title, description, imageUrl, date }) => {

    const [showMore, toggleShowMore] = useState(false);


    let desc = '';

    let showMoreText = '';

    if (description.length < 200){
        desc = description;
    }else{
        if (showMore === false){
            showMoreText = 'Show more';
            desc = description.substring(0, 200) + '...';
        }else{
            showMoreText = 'Show less';
            desc = description;
        }
    }
    

    return (
        <div className="objavaBody">
            <div className="info">
                <p className='date'>{date}</p>
                <a href="asd"><BiDotsVerticalRounded color='white' size={40}/></a>
            </div>
            <h3>{title}</h3>
            <p className='objavaDescription'>{desc}<p className='showMore' onClick={()=>toggleShowMore(!showMore)}>{showMoreText}</p></p>
            
            <img src={imageUrl} alt="img"/>
        </div>
    )
}

export default Objava;
