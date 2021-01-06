import React, {useState} from 'react';
import './Objava.css';
import {BiDotsVerticalRounded} from 'react-icons/bi';

const Objava = ({ title, description, imageUrl, date, index }) => {

    const [showMore, toggleShowMore] = useState(false);


    let desc = '';

    let showMoreText = '';

    if (description.length < 100){
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
    console.log(window.innerWidth)
    

    return (
        <div className="objavaBody">
            <div className="info">
                <p className='date'>{date.toDateString()}</p>
                <a href="asd"><BiDotsVerticalRounded color='white' size={30}/></a>
            </div>
            <h3>{title}</h3>
            <p className='objavaDescription'>{desc}</p>
            <p className='showMore' onClick={()=>toggleShowMore(!showMore)}>{showMoreText}</p>
            
            <img src={imageUrl} alt="img"/>
        </div>
    )
}

export default Objava;
