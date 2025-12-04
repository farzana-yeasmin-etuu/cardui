import React from 'react'
import './Card.css'
import Products from './products'

import Burger from  "../assets/burger.jpg"
import Pizza from '../assets/pizza.jpg'
import Pasta from '../assets/pasta.png'
const Card = () => {
  return (
    <div className='card_box'>
      <Products
      image={Burger}
      name="Burger"
      price="$8.00"
      para="Tasty Burger"
      />
      <Products
      image={Pizza}
      name="Pizza"
      price="$10.00"
      para="Tasty Pizza"
      />
      <Products
      image={Pasta}
      name="Pasta"
      price="$6.00"
      para="Tasty Pasta"
      />
    </div>
  )
}

export default Card
