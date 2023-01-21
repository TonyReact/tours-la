import {React, useEffect } from 'react'
import Start from '../UI/Start';
import Advantages from '../../advantages';
import Items from '../UI/Items';
import Price from '../UI/Price';
import Feedback from '../UI/Feedback';

const Home = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0); 
  });
  return (
    <main>
      <Start title="SAILING TOURS IN LOS ANGELES" />
      <div className='advantages-container'>
        <h2 className='advantages__title'>Our Advantages</h2>
        <p className='advantages__text'>Everybody loves us</p>
      </div>
      <div className='advantages-wrapper'>
        { Advantages.map( (advantage, index) => {
          return (
            <div className='advantage__box' key={index}>
              <img className='advantage__img' src={advantage.img} alt={advantage.title} />
              <h3 className='advantage__title'>{advantage.title}</h3>
              <p className='advantage__descritpion'>{advantage.description}</p>
            </div>
          )
        })};
      </div>
      <div className='advantage-btn'>
        <button className='start__btn'><a target='_blank' href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">BOOK NOW</a></button>
      </div>
      <Items />
      <Price />
      <Feedback />
    </main>
  )
}

export default Home;