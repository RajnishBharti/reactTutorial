import React from 'react'

export default function Navigation(props) {
  return (
    <nav>
        <ul>
            {
                props.navdata.map((x)=>{
                   return(<li onClick={()=>{props.getfunc(x)}}>{x}</li>) 
                })
            }
            
        </ul>
    </nav>
  )
}
