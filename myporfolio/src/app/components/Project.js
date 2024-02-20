import React from "react";
import styles from './Project.module.css'

function Project({image,nameProject}){
    /*<button className={styles.mainButton} >
                <span>Demo</span>
                <img src={'/assets/arrow-right.png'} />
            </button> */
    
    return(
        <div className={styles.mainContainer} >
            <fig className={styles.imageProject} >
                <img src={image} />
            </fig>
            <span className={styles.span1} >{nameProject}</span>
            
        </div>
    )
}

export default Project;