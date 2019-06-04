import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Score from './Score';

function Nav(props) {
    return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
        <Navbar.Text>Click an image to begin!</Navbar.Text>
        <Score score={props.score} topscore={props.topscore} />
        </Navbar>
        );
}



export default Nav