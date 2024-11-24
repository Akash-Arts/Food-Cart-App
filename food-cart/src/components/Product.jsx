import React from 'react'
import './Product.css'
import { useContext } from 'react'
import { cartContext } from '../App'

export const Product = ({product}) => {

  const {cart,setCart} = useContext(cartContext)

const addCart = () => {
  setCart([...cart, product])
}
const removeCart = () => {
setCart(cart.filter((c) => c.id !== product.id))
}

  return (
    <div className='product'> 
     <div className="img">
        <img src={product.image_link} alt={product.name} ></img>
     </div>
      <div className="details">
        <div>
        <h3>{product.name}</h3>
        <p>Price Rs: {product.price}</p>
        </div>
        <div className='cart-buttons'>
        {
          cart.includes(product)?
          (<button className='remove-btn' onClick={removeCart}>Remove from Cart</button>):
          (<button className='add-btn' onClick={addCart}>Add to Cart</button>)
        }
        </div>
      </div>
    </div>
  )
}
