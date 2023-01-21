import React from 'react'

const Start = (props) => {
  return (
    <div className='start-container'>
      <h1 className='start__title'>{ props.title }</h1>
      <button className='start__btn'><a target='_blank' href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">BOOK NOW</a></button>
    </div>
  )
}

export default Start