import React from 'react'
import Prices from '../../prices'

const Price = () => {
  return (
    <div className='price-box'>
      <div className='advantages-container'>
        <h2 className='advantages__title'>Tour Prices</h2>
      </div>
      <div className='price-container'>
        { Prices.map((price, index) => {
          return (
            <div className='price__item' key={index}>
              <h3 className='advantage__title'>{price.title}</h3>
              <div>
                <span className='oldprice'>{price.oldprice}</span>
              </div>
              <span className='currentprice'>{price.currentprice}</span>
              <button className='start__btn'><a target='_blank' href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">BOOK NOW</a></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Price