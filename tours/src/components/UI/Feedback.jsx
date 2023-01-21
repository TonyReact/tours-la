import React from 'react'
import Comments from '../../comments';

const Feedback = () => {
  return (
    <div className='feedback-container'>
      <div className='feedback-item'>
        <div className='advantages-container'>
          <h2 className='advantages__title'>Our Clients Feedback</h2>
        </div>
        <div className='feedback-wrapper'>
          {Comments.map((feedbackBox, index) => {
            return (
              <div className='feedback-box' key={index}>
                <div className='box__elements'>
                  <img className='box__img' src={feedbackBox.img} alt={feedbackBox.id} />
                  <span className='advantage__title'>{feedbackBox.name}</span>
                </div>
                <div className='descr__box'>
                  <p className='advantage__descritpion'>{feedbackBox.descr}</p>
                </div>
              </div>
            )
          })}
        </div>
        <button className='start__btn'><a target='_blank' href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">BOOK NOW</a></button>
      </div>
    </div>
  )
}

export default Feedback;