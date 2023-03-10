import React, {useState} from 'react'

export default function WhyUseUseEffect() {
  let [count, setCount]=useState(0)
  return (
    <div>
      <div>{count}</div>
    <button onClick={
      (()=>{
        setCount(count+1)
      }, ()=>{
        alert(`you carent value is ${count}`)
      })
      }>Increase</button>
    </div>
  )
}

