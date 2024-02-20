import React from "react";
import styles from './Info.module.css';

function Info({text1,text2,min}){
    return(
        <div className={styles.mainContainer} >
            <div className={styles.subcontainer} >
                <span>{text1}</span>
            </div>
            <textarea type="text" placeholder={text2} style={{minHeight: min}} ></textarea>
            
        </div>
    )
}

export default Info;