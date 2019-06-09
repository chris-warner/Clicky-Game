import React from 'react';
import Nav from './components/Nav.jsx'
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import Jumbotron from './components/Jumbotron.jsx';
import ImageTile from './components/ImageTile.jsx'

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
  var arr = [2, 11, 37, 42];
  arr = shuffle(arr);
  console.log(`array: ${arr}`);
  
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Container>
        <Row style={rowStyle} className="justify-content-md-center">
          <Col style={colStyle}>1 of 3 <ImageTile /></Col>
          <Col style={colStyle}>2 of 3 <ImageTile /></Col>
          <Col style={colStyle}>3 of 3 <ImageTile /></Col>
        </Row>
        <Row style={rowStyle}>
          <Col style={colStyle}>1 of 3 <ImageTile /></Col>
          <Col style={colStyle}>2 of 3 <ImageTile /></Col>
          <Col style={colStyle}>3 of 3 <ImageTile /></Col>
        </Row>
        <Row style={rowStyle}>
          <Col style={colStyle}>1 of 3 <ImageTile /></Col>
          <Col style={colStyle}>2 of 3 <ImageTile /></Col>
          <Col style={colStyle}>3 of 3 <ImageTile /></Col>
        </Row>
      </Container>
    </div>
  );
}

const colStyle = {
  height: '300px',
  width: '300px'
}

const rowStyle = {
  height: '300px',
   width:'100%'
}

export default App;
