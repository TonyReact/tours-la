import {React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Services from '../../data'
import Start from '../UI/Start';

const SingleActivity = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0); 
  });
  const { activityId } = useParams();

  const singleActivity = Services.find(activity => activity.id === parseInt(activityId));

  const { name, pict1, pict2, descr1, descr2 } = singleActivity;

  return (
    <main>
      <Start title="SAILING TOURS IN LOS ANGELES" />
      <div className="main-container">
        <div className='advantages-container'>
          <h2 className='advantages__title'>{name}</h2>
        </div>
        <div className="element-container">
          <div className='text-activities' id='text-activities__first'>
            <span className="line"></span>
            <p className='advantage__descritpion'>{descr1}</p>
          </div>
          <div className='image__container'>
            <img className='activity__image' src={pict1} alt={name} />
          </div>
        </div>
        <div className="element-container">
          <div className='image__container'>
            <img className='activity__image' src={pict2} alt={name}/>                                                                                            
          </div>
          <div className='text-activities' id='text-activities__second'>
            <span className="line" id='line'></span>
            <p className='advantage__descritpion'>{descr2}</p>
            <button className='start__btn'><a target='_blank' href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">BOOK NOW</a></button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleActivity;