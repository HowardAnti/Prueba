import React from "react";
import Goal from './Goal';
import { useState } from 'react';
import '../styles/ListGoal.css'

function ListGoal(){
    const[goals,setGoals]=useState([]);
    const[info,setInfo]=useState('');
    const[nroCompleted,setNroCompleted]=useState(0);
    const[nroOnDue,setNroOndue]=useState(0);


    const completed =(id)=>{
        const newGoals=goals.map((goal)=>{
            if(goal.id===id&&goal.going===true){
                setNroCompleted(nroCompleted+1);
                setNroOndue(nroOnDue-1);
                return {...goal, going:false}
            }
            return goal;
        })
        setGoals(newGoals);

    }

    //const show=()=>{
      //  console.log(goals);
    //}
    
    const deleted =(id)=>{
        const newGoals=goals.map((goal)=>{
            if(goal.id===id){
                goal.going===false? setNroCompleted(nroCompleted-1):setNroOndue(nroOnDue-1);
            }

            return goal;
            
        })
        setGoals(newGoals);
        setGoals(goal=>goal.filter((goal)=>(goal.id!==id)));
    }

    const show=()=>{
        console.log(goals);
    }

    const addGoal=()=>{
        setNroOndue(nroOnDue+1);
        const textG=info;
        setGoals([...goals,{textG, id: Date(), going: true}]);
        setInfo('');
    }

    return (
        <div className="list">
            <p className="title" >Mis metas</p>
            <div>
                <input  className="addInput"
                        type='text' 
                        value={info} 
                        onChange={(e)=>setInfo(e.target.value)}
                        placeholder='New Goal...'

                ></input>
                <button className='add' onClick={addGoal} >Add Goal</button>
            </div>

            <button onClick={show} >Show</button>

            <div className="numbers" >
                <input className="completedInput" value={"Completed: "+nroCompleted} readOnly></input>
                <input className="onDueInput" value={"Ondue: "+nroOnDue} readOnly></input>
            </div>
            <div>
                {goals.map(goal=>(<Goal key={goal.id} text={goal.textG} onclick1={()=>completed(goal.id)} 
                                        onclick2={()=>deleted(goal.id)} style={goal.going} />))}
            </div>
        </div>

    );
}

export default ListGoal;