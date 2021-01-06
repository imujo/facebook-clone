import React from 'react';
import './Objave.css';
import Objava from './Objava/Objava'
import objave from '../../data';

const Objave = () => {
    
    const items = [];

    for (const index in objave){
        items.push(<Objava 
            title={objave[index].title}
            description={objave[index].description}
            imageUrl={objave[index].imageUrl}
            date={objave[index].date}
            />
        )
    }

    return (
        <div className="objaveBody">
            <div className="novaObjava" onClick={() => console.log('click')}>
                <p className='addIcon'>+</p>
                <p className='novaObjavaText'>Nova objava</p>
            </div>
            {items}
        </div>
    )
}

export default Objave;
