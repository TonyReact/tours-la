import {React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Services from '../../data.js'
import Start from '../UI/Start';

const Activities = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0); 
  });
  return (
    <main>
      <Start title="ACTIVITIES" />
      <div className='container'>
        <div className='advantages-container'>
          <h2 className='advantages__title'>Choose Your Best Experience</h2>
          <p className='advantages__text'>Our team will do everything to make your vacation on a yacht bright and comfortable.</p>
        </div>
        <div className='items-wrapper'>
          { Services.map( (activity, index) => {
            return (
              <div className="container-advantg" key={index}>
                <img src={activity.img} alt={activity.name} />
                <p className="title">{activity.name}</p>
                <span className='line'></span>
                <div className="overlay"></div>
                <div className="button"><Link to={`/activities/${activity.id}`}>Read more →</Link></div>
            </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Activities;

            