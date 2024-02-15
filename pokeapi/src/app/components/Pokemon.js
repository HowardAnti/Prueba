"use client"

import Image from "next/image";
import React from "react";
import styles from "./Pokemon.module.css"
import { useState } from "react";
import Link from "next/link";

function Pokemon({pokemon,types,abilities,description,stats}){

    const pokebefore=pokemon.id-1;
    const pokeafter=pokemon.id+1;

    
/*<button><img src='./arrow_back.svg' /></button>*/
    return(
        <div className={styles.mainContainer} style={{background: `var(--${pokemon.type})` }} >
            <div className={styles.pokemonBackground} >
                <div className={styles.title} >
                    <div className={styles.pokemonName}>
                        <Link href={"/pages/PokemonList"} ><img src={'/images/arrow_back.svg'}/></Link>
                        
                        <h1 className={styles.name}>{pokemon.name}</h1>
                    </div>
                    <p className={styles.id}>{'#'+`${(pokemon.id)}`}</p>
                </div>
                <img className={styles.pokeball} src={'/images/pokeball.svg'} />
                
            </div>
            <div className={styles.pokemonInfo} >
                <div className={styles.pokemonDynamic}>
                    <Link href={"/pages/PokemonCard/"+pokebefore} ><img src='/images/chevron_left.svg' /></Link>
                    
                    <div className={styles.pokemonImg} >
                        <figure className={styles.imagePokemon} >
                            <img src={pokemon.image}/>
                        </figure>
                        <div className={styles.types} >
                            {types.map(type=>{
                                return(
                                    <div key={type.slot} className={styles.type} style={{background: `var(--${type.type.name})` }} >
                                        <p className={styles.paragraphInfo} style={{textTransform: "capitalize"}} >{type.type.name}</p>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                    <Link href={"/pages/PokemonCard/"+pokeafter} ><img src='/images/chevron_right.svg' /></Link>
                </div>
                <div className={styles.about} >
                    <h2 className={styles.subtitle} style={{color: `var(--${pokemon.type})` }} >About</h2>
                    <div className={styles.parameters} >
                        <div className={styles.box} >
                            <div className={styles.parametersNumber} >
                                <img src='/images/weight.svg'/>
                                <p className={styles.paragraphInfo}>{pokemon.weight/10+" kg"}</p>
                            </div>
                            <p className={styles.titles}>Weight</p>
                        </div>

                        <div className={styles.vertical} ></div>

                        <div className={styles.box} >
                            <div className={styles.parametersNumber}>
                                <img src='/images/rule.svg' />
                                <p className={styles.paragraphInfo}>{pokemon.height/10+" m" }</p>
                            </div>
                            <p className={styles.titles} >Height</p>
                        </div>

                        <div className={styles.vertical} ></div>

                        <div className={styles.box} >
                            <div className={styles.parametersAbilities} >
                                {abilities.map(ability=> {
                                    return(
                                        <p key={ability.slot} className={styles.paragraphInfo} style={{textTransform: "capitalize"}} >{ability.ability.name}</p>
                                    )
                                }
                                )}
                         
                            </div>
                            <p className={styles.titles} >Moves</p>
                        </div>
                    </div>
                    <div className={styles.description} >
                        <p className={styles.paragraphInfo}>{description}</p>
                    </div>
                </div>
                <div className={styles.baseStats} >
                    <h2 className={styles.subtitle} style={{color: `var(--${pokemon.type})` }} >Base Stats</h2>
                    <div className={styles.bsStats} >
                        
                            {stats.map(stat=>{
                                return(
                                    
                                    <div key={stat.stat.name} className={styles.line}>
                                        <div className={styles.statname} ><p className={styles.statsTitle} style={{color: `var(--${pokemon.type})`, fontWeight: 600 }} >{stat.stat.name}</p></div>
                                        <div className={styles.vertical} ></div>
                                        <div className={styles.statnumber}><p className={styles.paragraphInfo} >{`${(stat.base_stat)}`}</p></div>
                                        <div className={styles.bar} style={{background: `var(--${pokemon.type})`}} >       
                                            <div className={styles.barInside} style={{background: `var(--${pokemon.type})`, width: stat.base_stat*1.80 }} ></div>
                                        </div> 
                                    </div>
              
                                )
                            }
                                
                                
                            )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;