import React, {useState} from 'react'

export default function Timer() {
    let [cont, setcount]= useState(0)
  return (
    <>
    <div>{cont}</div>
    <button onClick={()=>{setcount(cont+1)}}>Increment</button>
    <button onClick={()=>{cont > 0  ? setcount(cont-1) :setcount(cont+0)}}>Decrement</button>

    </>
  )
}
