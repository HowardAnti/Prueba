"use client"
import React from "react";
import PokemonButtonCard from "./PokemonButtonCard";
import { useState, useEffect } from "react";
import styles from './PokemonList.module.css'


function PokemonListAll({page}){
    
    const [pokemons,setPokemons]=useState([]);

    const url="https://pokeapi.co/api/v2/pokemon/?offset="+page*12+"&limit=12";

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPokemons(data.results);
        })
    })

    return(
        <div className={styles.maincontainer}>
            {pokemons.map(pokemon=>
                <PokemonButtonCard pokename={pokemon.name} />
            )}
        </div>
    )
}

export default PokemonListAll;