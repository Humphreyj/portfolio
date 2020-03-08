import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Weather from './components/Weather';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Weather />
      <Slideshow />
   
    </div>
  );
}

export default App;
