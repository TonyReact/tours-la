import {React, useEffect } from 'react'
import Start from '../UI/Start';
import phone from '../../assets/img/phone.png'
import mailbox from '../../assets/img/mailbox.png'
import map from '../../assets/img/map.png'

const Contacts = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0); 
  });
  return (
    <main>
      <Start title="CONTACTS" />
      <div className="contacts-container">
        <div className="top-container">
          <div className="item__elements">
            <img className="contacts__img" src={phone} alt="phone" />
            <div className="text__elements">
              <p>Call us:</p>
              <span>
                <a href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">+1 (424) 542-9354</a></span>
            </div>
          </div>
          <div className="item__elements">
            <img className="contacts__img" src={mailbox} alt="mailbox" />
            <div className="text__elements">
              <p>Text us:</p>
              <span><a href="mailto:teamboats@sailing-losangeles.com">teamboats@sailing-losangeles.com</a></span>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=13755%20Fiji%20Way%20Marina%20del%20Ray,%20CA%2090292%20United%20States&t=&z=15&ie=UTF8&iwloc=&output=embed" scrolling="no" ></iframe>
              <a href="https://123movies-a.com"></a>
              <br />
              <a href="https://www.embedgooglemap.net">custom google maps for website</a>
            </div>
          </div>
          <div className="adress-container">
            <img className="contacts__img" src={map} alt="map" />
            <div className="text__elements">
              <p>Adress:</p>
              <span>13755 Fiji Way Marina del Ray, CA 90292 United States</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
