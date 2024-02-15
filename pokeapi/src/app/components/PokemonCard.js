"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";


function PokemonCard({pokenumber}){
    const pokemon3={
        id: 1,
        name: "Mew",
        image: "./mew.svg", 
        type: "psychic",
        weight: "4,0",
        height: "0,4",
        description: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen."
    }
    const abilities3=["Synchronize"]
    const types3=["Psychic"]
    const stats3=[
        {id: 1, statName: "HP", stat: 55},
        {id: 2, statName: "Attack", stat: 99},
        {id: 3, statName: "Defense", stat: 29},
        {id: 4, statName: "Speed Attack", stat: 5},
        {id: 5, statName: "Speed Defense", stat: 35},
        {id: 6, statName: "Speed", stat: 15}
    ]
    
    const [pokemon,setPokemon]=useState({});
    const [description,setDescription]=useState("");
    const [abilities,setAbilities]=useState([]);
    const [types,setTypes]=useState([]);
    const [stats,setStats]=useState([]);

    const [number,setNumber]=useState(pokenumber);
    
    const url="https://pokeapi.co/api/v2/pokemon/"+number;
    const url2="https://pokeapi.co/api/v2/pokemon-species/"+number;
    

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setAbilities(data.abilities);
            setTypes(data.types);
            setPokemon({
                id: data.id,
                name: data.name,
                image: data.sprites.other.dream_world.front_default, 
                type: data.types[0].type.name,
                weight: data.weight,
                height: data.height,
            })
            setStats(data.stats)
        })
    },[])

    useEffect(()=>{
        fetch(url2).then(res=>res.json()).then(data=>{
            setDescription(data.flavor_text_entries[3].flavor_text)
        })
    },[])

    
    return(
        <div>
            <Pokemon pokemon={pokemon} types={types} description={description} abilities={abilities}  stats={stats}/>
        </div>
    )
}

export default PokemonCard;