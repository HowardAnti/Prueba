import React from 'react';
import '../styles/Goal.css';
import trash from '../images/trash.svg';
import circle from '../images/circle.svg';

function Goal({text,textid,onclick1,onclick2,style}){
    return(
        <div className='goal'>
            <input className={style? 'noncompleted':'completed'} type='text' value={text} id={textid} readOnly></input>
            <div className='buttons'>
                <button onClick={onclick1}><img className='image' src={circle} alt="circle"/> </button>
                <button onClick={onclick2}><img className='image' src={trash} alt="trash"/> </button>
            </div>
        </div>
    )
}

export default Goal;