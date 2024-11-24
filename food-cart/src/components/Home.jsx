import React, { useState } from 'react'
import data from '../products.json'
import { Product } from './product'
import './Home.css'

export const Home = () => {
const [products] = useState(data)
 
return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
