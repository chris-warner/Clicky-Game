import React from 'react';
import Nav from './components/Nav.jsx'
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import Jumbotron from './components/Jumbotron.jsx';
import ImageTile from './components/ImageTile.jsx'

function App() {
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
