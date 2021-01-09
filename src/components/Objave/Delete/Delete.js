import React from 'react'
import './Delete.css'

const Delete = ({ setDelForm, id }) => {



    const deleteObjava = (id) => {
        fetch(`http://localhost:5000/objava/${id}`, {
            method: 'delete'})
        window.location.reload(false);
    }
    

    return(
        <div className="floatingCenter deleteFormBody">
            <p className='promptText'>Jeste li sigurni da želite izbrisati objavu?</p>
            <div className="deleteButtons">
                <button className='delete formBorder' onClick={()=>deleteObjava(id)}>Delete</button>
                <button className='submit formBorder' onClick={()=> setDelForm(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default Delete;