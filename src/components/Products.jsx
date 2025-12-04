import React from "react"

import './Products.css'
const Products = (props) => {
  return (
    <div className="products_box">
     <img src={props.image} alt="" />
     <div className="description">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p className="para">{props.para}</p>
        <button className="btn">Buy Now</button>
     </div>
    </div>
  )
}

export default Products
