import React from 'react'
import Boxes from '../../services';
import { Link } from 'react-router-dom';

const Items = () => {
  return (
    <div>
      <div className='advantages-container'>
        <h2 className='advantages__title'>Our Best Activities</h2>
      </div>
      <div className='items-wrapper'>
        {Boxes.map((box, index) => {
          return (
            <div className="container-advantg" key={index}>
              <img src={box.img} alt={box.title} />
              <p className="title">{box.title}</p>
              <span className='line'></span>
              <div className="overlay"></div>
              <div className="button"><Link to={`/activities/${box.id}`}>BOOK NOW →</Link></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Items;