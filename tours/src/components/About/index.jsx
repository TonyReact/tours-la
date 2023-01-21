import {React, useEffect } from 'react'
import Start from '../UI/Start';
import pic1 from '../../assets/img/about-pic1.png'
import pic2 from '../../assets/img/about-pic2.png'

const About = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0); 
  });
  return (
    <main>
      <Start title="ABOUT US" />
      <div className="main-container">
        <div className="element-container">
          <div className='text-activities'>
            <h2 className="advantage__title">We make people happy</h2>
            <span className="line"></span>
            <p className='advantage__descritpion'>
              We work hard every day to make life of our clients better and happier. Boat trips on a yacht, romantic meetings, tours to dolphins, fishing: for more than three ye ars, my team and I have been surprising, delighting, bringing happiness and being proud of our mission.
            </p>
          </div>
          <div className='image__container'>
            <img className='activity__image' src={pic1} alt='about-pic1' />
          </div>
        </div>
        <div className="element-container">
          <div className='image__container'>
            <img className='activity__image' src={pic2} alt='about-pic2'/>                                                                                            
          </div>
          <div className='text-activities'>
            <h2 className="advantage__title">We love our fleet</h2>
            <span className="line"></span>
            <p className='advantage__descritpion'>
              We constantly support it in the best possible way, so that it pleases customers and never fails on the water.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;