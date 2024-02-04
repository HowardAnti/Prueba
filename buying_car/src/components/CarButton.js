import React from "react";
import '../styles/CarButton.css'

function CarButton({image, click,number}){
    return(
        <div className="car">
            <button className="carButton" onClick={click}>
            <img src={require(`../images/${image}.svg`)} alt={"button: "+image}/>
            </button>
            <div className="pointer" >
                <p>{number}</p>
            </div>
        </div>
    )
}

export default CarButton;