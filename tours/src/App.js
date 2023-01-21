import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Activities from './components/Activities';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Homepage';
import SingleActivity from './components/SingleActivity';
import './styles/global.scss'
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : ( 
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='activities' element={<Activities />} />
          <Route path='activities/:activityId' element={<SingleActivity />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
      )}
    </div>
  );
}

export default App;
