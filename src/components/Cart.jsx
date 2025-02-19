import React from 'react'
import '../css/Cart.css'
import { useSelector,useDispatch } from 'react-redux'
import { decreaseQty, increaseQty, removeFromCart } from '../redux/slicer'
import Checkout from './Checkout'


const Cart = () => {
    const cartItems = useSelector(state=>state.cart.cartVal)
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc,curr)=>{
      return acc+(curr.new_price*curr.qty)
    },0);

  return (
    <>
    <div className='cart-wrap'>
      <table>
        <thead>
          <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>total</th>
          <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          
          {cartItems.length == 0 ?
      (
        <tr className="cart" >
          <td colSpan={'6'} className='emptycart'>Your cart is Empty</td>
        </tr>
      )
      :
      (
        cartItems.map((item)=>(
          <tr className="cartcontainer" key={item.id}>
            <td><img src={item.image} alt="product" /></td>
            <td><h2>{item.name}</h2></td>
            <td><h2>{item.new_price}</h2></td>
            <td className='actions'><button onClick={()=>dispatch(decreaseQty(item.id))}>-</button><h2>{item.qty}</h2><button onClick={()=>dispatch(increaseQty(item.id))}>+</button></td>
            <td><h2>{item.new_price*item.qty}</h2></td>
            <td><button className='remove-btn' onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button></td>
          </tr>
        ))
        
      )
    
    }
        </tbody>
      </table>
      
    </div>
    <Checkout total={total}/>
    </>
  )
}

export default Cart
