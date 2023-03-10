

//EXAMPLE 1  == BASICE USE OF 'useEffect'==

// import React, {useEffect}  from 'react'
// function UseEffect() {

//     useEffect(()=>{
//         console.log("1==This Is  Use Effect")
//     })
//      console.log("2===This Is  Outer Sider")
//   return (
 
//     <div>
//         {
//              console.log("3===This Is  Inner Sider")
//         }
        
//         UseEffect</div>
//   )
// }

// export default UseEffect



//EXAMPLE 2  == use State with UseEffect'==
import React, {useState, useEffect}  from 'react'
function UseEffect() {
    let a= 0;
    let [inc, setIncre]= useState(a)

    let [mult, setMult]= useState(10)


    
    useEffect(()=>{
        console.log("VAlue is "+inc)
    },[inc])

    useEffect(()=>{
        console.log("VAlue is "+mult)
    },[mult])
  return (
   
 
    <div>
       <h1>{inc}</h1>        
        <button onClick={()=>{setIncre(inc+1)}}>Increase Me</button>
        <hr />
        <h2>{mult}</h2>

        <button onClick={()=>{setMult(mult*2)}}>Multiply Me</button>
    </div>
  )
}

export default UseEffect





