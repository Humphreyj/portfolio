import React from 'react';
import './App.css';
import NameAndSkills from './components/NameAndSkills';
import Projects from './components/projects/Projects';
import './sass/global.scss'
function App() {
  return (
    <div className="App">
      <NameAndSkills />
      <Projects />
   
    </div>
  );
}

export default App;
