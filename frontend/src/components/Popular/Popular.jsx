import React from 'react'
import './Popular.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Clothes</h1>
      <hr />

      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular