"use client"
import React from "react";
import { useState,useEffect } from "react";
import PokemonButton from "./PokemonButton";


function PokemonButtonCard({pokename}){
    
    const pokemon1={
        id: "#5",
        name: "Aron",
        image: "./aroon.svg",
        color: "steel"
    }

    const [pokemon,setPokemon]=useState({});

    const url="https://pokeapi.co/api/v2/pokemon/"+pokename;

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPokemon({
                id: data.id,
                name: data.name,
                image: data.sprites.other.dream_world.front_default,
                color: data.types[0].type.name
            }) 
        })
    })

    return(
        <PokemonButton pokemon={pokemon} />
    )
}

export default PokemonButtonCard;