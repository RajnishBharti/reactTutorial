import React, {useState, useEffect} from 'react'

export default function UseEffect() {
    let [count, setcount] =useState(0)
    useEffect(()=>{
        alert(`Hello Teach Coders ${count}`)
    },[count])
  return (
    <div>
        <div>{count}</div>
        <button onClick={(()=>{setcount(count+1)})}>Increase</button>
    </div>
  )
}
