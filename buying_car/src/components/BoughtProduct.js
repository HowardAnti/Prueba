import React from "react";
import '../styles/BoughtProduct.css'

function BoughtProduct({image,description,howMany,priceTotal,click1,click2}){
    return(
        <div className="boughtProduct">
            <div className="images">
                    <img src={require(`../images/${image}.svg`)} alt={"Bought "+image}/>
            </div>
            <div className="actions">
                <p>{description}</p>
                <div className="buttons">
                    <button onClick={click1} >Add more</button>
                    <button onClick={click2} >Take away</button>
                </div>
            </div>
            <div className="prices">
                <div className="howMany"><p>{howMany}</p> </div>
                <p>{"Total: $"+priceTotal}</p>
            </div>
              
        </div>
    )
}

export default BoughtProduct;