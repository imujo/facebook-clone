import React, {useState} from 'react';
import './Objave.css';
import Objava from './Objava/Objava'
import objave from '../../data';
import NovaObjavaForm from '../NovaObjavaForm/NovaObjavaForm'

const Objave = () => {
    
    const [displayChange, setDisplay]= useState('none')

    const items = [];

    for (const index in objave){
        items.push(
            <div data-aos='fade-right' className="objava" key = {index} >
                <Objava 
                title={objave[index].title}
                description={objave[index].description}
                imageUrl={objave[index].imageUrl}
                date={objave[index].date}
                />
            </div>
        )
    }

    return (
        <div className="objaveBody">
            <div data-aos='fade-right' className="novaObjava" onClick={() => setDisplay('inline')}>
                <p className='addIcon'>+</p>
                <p className='novaObjavaText'>Nova objava</p>
            </div>
            <NovaObjavaForm displayChange={displayChange}/>
            {items}
        </div>
    )
}

export default Objave;
