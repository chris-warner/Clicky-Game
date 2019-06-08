import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Counter from './Counter';

function Nav(props) {
    return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
        <Navbar.Text>Click an image to begin!</Navbar.Text>
        <Counter score={4} TopScore={6}/>
        </Navbar>
        );
}

export default Nav