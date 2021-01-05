import React from 'react';
import './Welcome.css'

const Welcome = () => {
    return(
        <div className="welcomeBody">
            <div className="body">
                <div className="personal">
                    <div className="headshot"></div>
                    <div className="welcomeMessage">
                        <h1>Nikša Mujo</h1>
                        <h2>dobrodošli</h2>
                    </div>
                </div>
                <div className="verticalLine"></div>
                <div className="stats">
                    <div className="statItem">
                            <p className='statName'>broj objava</p>
                            <p className='statValue'>43</p>
                        </div>
                    <div className="statItem">
                        <p className='statName'>prva objava</p>
                        <p className='statValue'>21.12.2020.</p>
                    </div>
                    <div className="statItem">
                        <p className='statName'>poslijednja objava</p>
                        <p className='statValue'>2.1.2021.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Welcome;