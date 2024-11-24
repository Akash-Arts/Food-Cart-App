import React, { useEffect, useState, useContext } from 'react'
import './Viewcart.css'
import { cartContext } from '../App'


export const Viewcart = () => {

  const {cart, setCart} = useContext(cartContext)

const [total, setTotal] = useState(0)
useEffect(() => {
  setTotal(cart.reduce((acc,curr) => acc+parseInt(curr.price*curr.quantity),0))
},[cart])

const removeCart = (id) => {
  setCart(cart.filter((c) => c.id !==id))}

  const increaseQuatity = (id) => {
    setCart(cart.map(product => 
      product.id ===id? {...product, quantity: product.quantity+1}:product
    ))
  }

  const decreaseQuatity =(id) => {
    setCart(cart.map(product=>
      product.id===id && product.quantity > 1 ? {...product, quantity: product.quantity-1}:product
    )) 
  }

  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
    <div className='cart-container'>
      {cart.map((product) =>(
        <div className="cart-product" key={product.id}>
          
        <div className="img">
          <img src={product.image_link} alt={product.name}></img>
          <div className="cart-product-details">
          <h3>{ product.name }</h3>
          <p>Price Rs:{product.price}</p>
          {(product.quantity>1?<h4>Total price of this product : {product.price*product.quantity}</h4>:"")}
        </div>
        </div>
        <div className='quantity'>
          <button onClick={()=>decreaseQuatity(product.id)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={()=>increaseQuatity(product.id)}>+</button>
        </div>
        <button className='remove-cart' onClick={()=> removeCart(product.id)}>Remove from Cart</button>
      </div>
      ))}
      
    </div>
    <h2 className='cart-total-amt'>Total amount Rs: {total}</h2>
    </>
  )
}
