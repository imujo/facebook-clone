import React, {useState, useEffect} from 'react';
import './Welcome.css'

const Welcome = () => {

    const [objave, setObjave] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/objave')
            .then(res => res.json())
            .then(data=>setObjave(data))
    }, [])

    let datumi = [];
    objave.map((objava)=>{
        datumi.push(new Date(objava.date))
        return null
    })
    let newestDate = new Date(Math.max.apply(null, datumi))
    let oldestDate = new Date(Math.min.apply(null, datumi))

    const datumiEmpty = (loc) => {
        const empty = datumi.length === 0 ? true : false;
        if (empty){
            return '-'
        }
        else if (loc === 'prva'){
            return oldestDate.toLocaleDateString()
        }
        else{
            return newestDate.toLocaleDateString()
        }
    }


    return(
        <div className="outline">
            <div className="welcomeBody">
            <div className="headshot"></div>
            <div className="welcomeMessage">
                <h1>Nikša Mujo</h1>
                <h2>dobrodošli</h2>
                <div className="welcomeLine"></div>

            </div>
            <div className="vline"></div>
            <div className="stats">
            <div className="statItem">
                    <p className='statName'>prva objava</p>
                    <p className='statValue'>{datumiEmpty('prva')}</p>
                </div>
                <div className="statItem">
                        <p className='statName'>broj objava</p>
                        <p className='statValue'>{objave.length}</p>
                    </div>
                <div className="statItem">
                    <p className='statName'>poslijednja objava</p>
                    <p className='statValue'>{datumiEmpty('zadnja')}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Welcome;