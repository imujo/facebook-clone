import React from 'react';
import './Welcome.css'
import objave from '../../data'

const Welcome = () => {

    let datumi = [];
    objave.map((objava)=>{
        datumi.push(objava.date)
        return null
    })
    let newestDate = new Date(Math.max.apply(null, datumi))
    let oldestDate = new Date(Math.min.apply(null, datumi))

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
                    <p className='statValue'>{oldestDate.toLocaleDateString()}.</p>
                </div>
                <div className="statItem">
                        <p className='statName'>broj objava</p>
                        <p className='statValue'>{objave.length}</p>
                    </div>
                <div className="statItem">
                    <p className='statName'>poslijednja objava</p>
                    <p className='statValue'>{newestDate.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Welcome;