import React from 'react';
import Nav from './components/Nav.jsx'
import './App.css';
import Jumbotron from './components/Jumbotron.jsx';

function App() {
  return (
    <div className="App">
      <Nav score={0} topscore={0}/>
      <Jumbotron />
    </div>
  );
}

export default App;
