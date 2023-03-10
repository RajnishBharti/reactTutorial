import React, {useState} from 'react'
import './Ecommerce.css'
import  EcommerceCard from './EcommerceCard'
import EcommerceApi from './EcommerceApi'
import Navigation from './Navigation'




export default function Ecommerce() {

  let [apidata, setapidata] = useState(EcommerceApi)

function getfunc(t){
 if(t === "All Product"){
  setapidata(EcommerceApi)
  return
 }



 let newapidata = EcommerceApi.filter((k)=>{
    return k.category === t
 })
 setapidata(newapidata)
}


  let navdata = [...new Set (
    EcommerceApi.map((x)=>{
      return x.category
   })
  ), "All Product"]
  //console.log( navdata)




  return (
    <div className='warper'>
    <Navigation navdata={navdata} getfunc= {getfunc} />
    <EcommerceCard item = {apidata} />

  </div>

  )
}


