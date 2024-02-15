"use client"
import React from "react";
import PokemonButtonCard from "./PokemonButtonCard";
import { useState, useEffect } from "react";
import styles from './PokemonList.module.css'


function PokemonListType({poketype,page}){
    
    const [pokemons,setPokemons]=useState([]);

    const url="https://pokeapi.co/api/v2/type/"+poketype;

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPokemons(data.pokemon);
        })
    })

    const shownPokemons=pokemons.slice(0+12*page,12+12*page);

    return(
        <div className={styles.maincontainer}>
            {shownPokemons.map(shownPokemon=>
                <PokemonButtonCard pokename={shownPokemon.pokemon.name} />
            )}
        </div>
    )
}

export default PokemonListType;