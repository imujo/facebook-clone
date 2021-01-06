import React from 'react'
import './NovaObjavaForm.css'
import objave from '../../data';

const NovaObjava = ({displayChange}) => {
    let setTitle = '';
    let setDesc = '';
    let setImageUrl = '';

    function setForm (input, action){
        input = action.target.value;
    }

    function objavePush(title=setTitle, desc=setDesc, img=setImageUrl) {
        objave.push({
            title: title,
            description: desc,
            imageUrl: img,
            date: new Date().toDateString()
        })
    }
    return(
        <div style={{display: displayChange}} className="novaObjavaBody" onClick={()=> console.log('omg')}>
            <div className="titleArea">
                <h1 className='formH1'>Nova objava</h1>
            </div>
            <form action="" className='novaObjavaForm'>
                <div className="titleFormDiv">
                    <label className='titleFormLabel' htmlFor="title">Title</label>
                    <input className='formBorder' type="text" name='title' id='title' onChange={(action)=>setForm(setTitle, action)} />
                </div>
                <div className="descFormDiv">
                    <label htmlFor="desc">Description</label>
                    <textarea className='formBorder' name='desc' id='desc' onChange={(action)=>setForm(setDesc, action)} />
                </div>
                <div className="imageUrlFormDiv">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input className='formBorder' type="text" name='imageUrl' id='imageUrl'  onChange={(action)=>setForm(setImageUrl, action)} />
                </div>
                <div className="buttonsDiv">
                    <input className='submit formBorder' type="submit" name='Submit' onClick={()=>objavePush} />
                    <button className='delete formBorder' onClick={()=>displayChange='none'} >Delete</button>
                </div>
            </form>
    </div>
    )
}

export default NovaObjava;