import React from 'react'
import '../css/CheckOut.css'
import { useSelector } from 'react-redux'

const Checkout = ({total}) => {

  const gst = total*18/100

  return (
    <div className='check'>
      <h1>Cart Item Details</h1>
      <div className="price-d">
        <div className="price-group">
        <h2>SubTotal :</h2>
        <h2>$ {total}</h2>
        </div>

        <div className="price-group">
        <h2>Shipping Charges :</h2>
        <h2>Free</h2>
        </div>
        
        
        <div className="price-group">
        <h2>GST : </h2>
        <h2>18%</h2>
        </div>
        <div className="price-group">
        <h2>Total :</h2>
        <h2>$ {total + gst}</h2>
        </div>
        <button className='check-out'>CheckOut</button>
      </div>
    </div>
  )
}

export default Checkout
