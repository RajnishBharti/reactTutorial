import React from 'react'

export default function EcommerceCard(props) {
    ///console.log(props.item)
  return (
    <>
    <h1>Electronics</h1>
    <div className='box-row'>  

            {
                props.item.map((x)=>{
                    return(

                    <div className='box'>
                    <div className='imageHolder'><img src={x.image} /></div>
                    <div className='content'>
                        <h2>{x.title}</h2>
                        <div className='catPricerow'>
                                <div className='catg'><strong>Cat. : </strong>{x.category }</div>
                                <div className='price'><strong>Price : </strong>₹ {x.price}</div>
                            </div>
                            <div className='description'>{x.description}</div>
                        </div>
                    </div>
                    )
                })
                
            }
        


    </div>
</>
  )
}
