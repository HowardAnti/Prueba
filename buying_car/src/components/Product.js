import React from 'react';
import '../styles/Product.css'

function Product({image, description, price, addProduct}){
    return(
        <div className='product'>
            <img className='imageProduct' src={require(`../images/${image}.svg`)} alt={"product: "+image}/>
            <p className='description'>{description+" - $"+price}</p>
            <button className='addProduct' onClick={addProduct}>Add to card</button>
        </div>
    )
}

export default Product;