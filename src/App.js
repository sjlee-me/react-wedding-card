import React from 'react'
import './App.css';

import './css/Cover.css'
import './css/Invitation.css'
import './css/Calendar.css'
import './css/Account.css'
import './css/Gallery.css'
import './css/Location.css'
import './css/Footer.css'
import './css/Quiz.css'

import Cover from './pages/Cover.js'
import Invitation from './pages/Invitation.js';
import Calendar from './pages/Calendar.js';
import Contact from './pages/Account.js';
import Location from './pages/Location.js';
import ImgGallery from './pages/ImgGallery.js';
import Footer from './components/Footer.js';
import Quiz from './pages/Quiz.js';



function App() {

  return (
    <div className="App">
      <Cover/>
      <Invitation />
      <Calendar />
      <ImgGallery />
      <Location />
      <Quiz/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
