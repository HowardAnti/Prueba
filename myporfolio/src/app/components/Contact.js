import React from "react";
import styles from './Contact.module.css'


function Contact({image,text1,text2}){
    return(
        <div className={styles.mainContainer} >
            <img src={image} />
            <span className={styles.name} >{text1}</span>
            <span className={styles.user} >{text2}</span>
            <button>
                <span className={styles.write} >Write me</span>
                <img src={'/assets/arrow-right.png'} />
            </button>
        </div>
    )
}

export default Contact;