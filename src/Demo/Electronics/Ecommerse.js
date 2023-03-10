import React, {useState} from 'react';
import  EcommerseApi from './ElectronicsApi';
import EcommerseCard from './EcommerseCard';
import Nav from './Nav';
export default function Ecommerse() {

    let [apidata, setApi]= useState(EcommerseApi)
    

    function getNav(t){
   
        if(t==="All Product"){
            setApi (EcommerseApi)
            return
        }

        let navItem=  EcommerseApi.filter((y)=>{
            return y.category ===t;
        })
      // console.log(navItem)
       
       setApi(navItem)
    }

  let navData=  [...new Set(EcommerseApi.map((y)=>{        
        return y.category
  })),"All Product" ] 
  
  console.log(navData)
  return (
    <div className='warper'>
        <Nav navitem={navData} getNav={getNav}  />
        <EcommerseCard elect= {apidata} />
    </div>
  )
}
