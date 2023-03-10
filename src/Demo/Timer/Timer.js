import React, {useState, useEffect} from 'react'

export default function Timer() {
    let [timer, settimer]=useState(0);
    useEffect(()=>{
        console.log(timer)
    },[timer])
  return (
    <>
    <div>{timer}</div>
    <button onClick={()=>{settimer(timer+1)}}>+1</button>
    <button onClick={()=>{timer > 0 ? settimer(timer-1) : settimer(0)}}>-1</button>
    </>
  )
}
