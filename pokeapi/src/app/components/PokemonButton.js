"use client"

import React from "react";
import styles from "./PokemonButton.module.css";
import Link from "next/link";

/*<button style={{background: `var(--${pokemon.color})`}} ><p className={styles.name} >{pokemon.name}</p> </button>*/

function PokemonButton({pokemon}){
    return(
        <div className={styles.maincontainer} style={{borderColor: `var(--${pokemon.color})` }} >
            <div className={styles.subcontainer} >
                <p style={{color: `var(--${pokemon.color})`}} >{"#"+pokemon.id}</p>
                <figure>
                    <img src={pokemon.image}/>
                </figure>
            </div>
            <Link className={styles.linkcontainer} href={"/pages/PokemonCard/"+pokemon.id} 
            style={{background: `var(--${pokemon.color})`}}><p className={styles.name} >{pokemon.name}</p> </Link>
        </div> 
    )
}

export default PokemonButton;