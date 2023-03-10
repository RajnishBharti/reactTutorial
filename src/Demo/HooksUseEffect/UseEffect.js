import React, {useState, useEffect} from 'react'

function UseEffect() {

  // EXAMPLE : BASIC (START UP) HOOKS
  // let [inc, setIncre]= useState(0)
  //   console.log('1. This is Top Side ')
  // useEffect(()=>{
  //   console.log('2. This is Effect Side ')
  // })
  // return (
  //   <div>
  //     {
  //        console.log('3. This is Inner Side')
  //     }
  
  //   </div>
  // )



  //EXAMPLE 2 : WITH STATE AND HOOKS
    
    let [inc, setIncre]= useState(0)

    let [mul, setMul]= useState(1)


    useEffect(()=>{
      console.log('hello')
    })

    return (
      <div>
        <h1>{inc}</h1> 
        <button onClick={()=>{setIncre(inc+1)}}>Increase me</button>
       <hr />
       <h2>{setMul}</h2>
       <button onClick={()=>{setIncre(mul+2)}}>Multiply me</button>
      </div>
    )
}

export default UseEffect