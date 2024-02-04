import React, { useState } from "react";
import Product from "./Product";
import CarButton from "./CarButton";
import '../styles/Menu.css'
import MenuBoughtProduct from "./MenuBoughtProduct";

function Menu(){
    
    
    

    const menu_products=[
        {id: 1, description: "Hamburguer", image: "image1", price: 15},
        {id: 2, description: "French fries", image: "image2", price: 25},
        {id: 3, description: "Pizza", image: "image3", price: 28},
        {id: 4, description: "Chinesse food", image: "image4", price: 2},
        {id: 5, description: "Tacos", image: "image5", price: 7},
        {id: 6, description: "Hot dog", image: "image6", price: 35}
    ]

    const bought_products=[
        {id: 1, description: "Hamburguer", image: "image1", howMany: 0, priceTotal: 0},
        {id: 2, description: "French fries", image: "image2", howMany: 0, priceTotal: 0},
        {id: 3, description: "Pizza", image: "image3", howMany: 0, priceTotal: 0},
        {id: 4, description: "Chinesse food", image: "image4", howMany: 0, priceTotal: 0},
        {id: 5, description: "Tacos", image: "image5", howMany: 0, priceTotal: 0},
        {id: 6, description: "Hot dog", image: "image6", howMany: 0, priceTotal: 0}
    ]

    const[nroBuy,setNroBuy]=useState(0);
    const[nroProducts,setNroProducts]=useState(0);
    const[totalPrice,setTotalPrice]=useState(0);
    const[records,setRecords]=useState([]);
    const[boughtRecords,setBoughtRecords]=useState(bought_products);
    const[show,setShow]=useState(false);

    const pr=()=>{
        console.log("Total price: $"+totalPrice);
        console.log(records);
        setShow(!show);
      }

    const addMore=(id)=>{
        const prevBoughtRecords=boughtRecords.map(boughtRecord=>{
            if(boughtRecord.id===id){
                setTotalPrice(totalPrice+boughtRecord.priceTotal/boughtRecord.howMany);
                return {...boughtRecord,howMany: boughtRecord.howMany+1, 
                    priceTotal: boughtRecord.priceTotal+boughtRecord.priceTotal/boughtRecord.howMany}
            }
            return boughtRecord;
        })
        setBoughtRecords(prevBoughtRecords);
    }

    const takeAway=(id)=>{
        const prevBoughtRecords=boughtRecords.map(boughtRecord=>{
            if(boughtRecord.id===id){
                setNroProducts(nroProducts-1);
                setTotalPrice(totalPrice-boughtRecord.priceTotal/boughtRecord.howMany);
                return {...boughtRecord,howMany: boughtRecord.howMany-1, 
                    priceTotal: boughtRecord.priceTotal-boughtRecord.priceTotal/boughtRecord.howMany}
            }
            return boughtRecord;
        })
        setBoughtRecords(prevBoughtRecords);
    }
   

    const click=(image, bought, priceBought,id)=>{
        setNroBuy(nroBuy+1);
        const prevRecords=[...records,{id: nroBuy, image: image, bought: bought, priceBought: priceBought}];
        setNroProducts(nroProducts+1);
        setTotalPrice(totalPrice+priceBought);
        setRecords(prevRecords);

        const prevBoughtRecords=boughtRecords.map((boughtRecord)=>{
            if(boughtRecord.id===id){
                return {...boughtRecord, howMany: boughtRecord.howMany+1, priceTotal: boughtRecord.priceTotal+priceBought};
            }
            return boughtRecord;
        })


        setBoughtRecords(prevBoughtRecords);
        
    }

    return(
        <div className="ap">
            <div className="car" >
                {show?
                    <div>
                    <MenuBoughtProduct image={"x"} bought_products={boughtRecords} totalPrice={totalPrice} pr={pr} 
                    addMore={addMore} takeAway={takeAway} />
                    </div>
                    : 
                    <div>
                        <CarButton image={"car"} click={pr} number={nroProducts}/>
                    </div>
                }
            </div>
            
            <div className="menu">
                {menu_products.map(menu_product=>(<Product key={menu_product.id} image={menu_product.image}
                description={menu_product.description}
                price={menu_product.price}
                addProduct={()=>click(menu_product.image,menu_product.description,menu_product.price,menu_product.id)} />))}
            </div>

        </div>
    )
}

export default Menu;
