import React from 'react'



export default function Nav(props) {
  return (
    <nav>
        <ul>
            {
            props.navitem.map((x)=>{
            return (<li onClick={()=>{props.getNav(x)}}>{x}</li>)
            })
            }
        </ul>
   </nav>

  )
}
