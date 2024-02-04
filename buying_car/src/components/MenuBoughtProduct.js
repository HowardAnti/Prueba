import React from "react";
import BoughtProduct from "./BoughtProduct";
import '../styles/MenuBoughtProduct.css'

function MenuBoughtProduct({image,bought_products,totalPrice,pr,addMore,takeAway}){
    
    

    
    return(

        <div className="menuBought">
            <button className="xButton" onClick={pr}><img src={require(`../images/${image}.svg`)} alt={image+" image"}/></button>
            <h3 className="carl">Your car</h3>
            {totalPrice===0? <h2 className="total" >Your car is empty</h2>
            :
            <div className="cart">
                {bought_products.map(bought_product=>{
                    if(bought_product.howMany!==0){
                        return <BoughtProduct key={bought_product.id} description={bought_product.description} image={bought_product.image}
                        howMany={bought_product.howMany} priceTotal={bought_product.priceTotal} click1={()=>addMore(bought_product.id)} 
                        click2={()=>takeAway(bought_product.id)} />
                    }
                    return null;
                }
                )}
            </div>

            }
            <h3 className="total" >{"Total price: $"+totalPrice}</h3>
            
        </div>
    )
}

export default MenuBoughtProduct;