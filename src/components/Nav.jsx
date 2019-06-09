import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Counter from './Counter';

function Nav(props) {
    return (        
        <Navbar fluid bg="light">
        <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
        <Navbar.Text>Click an image to begin! </Navbar.Text>
        <Counter style={counterStyle} score={4} TopScore={6}/>
        </Navbar>
        );
}

const counterStyle = {
  margin:'0 auto'
}

export default Nav