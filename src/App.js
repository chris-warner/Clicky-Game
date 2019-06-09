import React from 'react';
import Nav from './components/Nav.jsx'
import './App.css';
import Jumbotron from './components/Jumbotron.jsx';
import ImageGrid from './components/ImageGrid';
function App() {

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so

  return (
    <div className="App">
      
      <Nav />
      <Jumbotron />
      <ImageGrid />
    </div>
  );
}

export default App;
