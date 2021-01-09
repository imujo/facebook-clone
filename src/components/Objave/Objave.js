import React, {useState, useEffect} from 'react';
import './Objave.css';
import Objava from './Objava/Objava'
import NovaObjavaForm from '../NovaObjavaForm/NovaObjavaForm'

const Objave = () => {
    
    const[novaObjavaOpen, setNovaObjavaOpen] = useState(false);
    const [objave, setObjave] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/objave')
            .then(res => res.json())
            .then(data=>setObjave(data))
    }, [])
    

    const items = [];

    for (var i = 0; i < objave.length; i++){
        items.push(
            <div  className="objava" key = {i} >
                <Objava 
                title={objave[i].title}
                description={objave[i].description}
                imageUrl={objave[i].imageurl}
                date={objave[i].date}
                id = {objave[i].id}
                setNovaObjavaOpen = {setNovaObjavaOpen}
                />
            </div>
        )
    }

    return (
        <div className="objaveBody">
            <div className="novaObjava" onClick={() => setNovaObjavaOpen(!novaObjavaOpen)}>
                <p className='addIcon'>+</p>
                <p className='novaObjavaText'>Nova objava</p>
            </div>



            {
                novaObjavaOpen ?
                <NovaObjavaForm setNovaObjavaOpen={setNovaObjavaOpen} option='nobjava' />
                :
                <div></div>
            }

            {
                items.length === 0 ?
                <p className='noObjave'>Nemate objava...</p>
                :
                <div>
                    {items}
                </div>
                
            }
            
            
        </div>
    )
}

export default Objave;
