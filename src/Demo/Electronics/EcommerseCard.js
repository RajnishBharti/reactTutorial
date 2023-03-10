import React from 'react'
import './Electronics.css'

export default function EcommerseCard(props) {
  return (
 
    <div className='box-row'>
    
    {
        props.elect.map((y)=>{
            return(
                <div className='box'>
            <div className='imageHolder'><img src={y.image} alt='fdsf' /></div>
            <div className='content'>
                <h2>{y.title}</h2>
                <div className='catPricerow'>
                     <div className='catg'><strong>Cat. : </strong>{y.category}</div>
                     <div className='price'><strong>Price : </strong>₹ {y.price}</div>
                 </div>
                 <div className='description'>{y.description}</div>
             </div>
         </div> 
                )

        })   
    }
    </div>

        
  )
}
