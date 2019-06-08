import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import background from '../img/background.jpg';

function ReactJumbotron() {
    return (
        <Jumbotron style={jumbotronStyle}>
            <h1>Clicky Game</h1>
            <h2 style={centerText}>Click on an image to earn points, but don't click on any more than once!</h2>
        </Jumbotron>
    );
}

const jumbotronStyle = {
    height: '400px',
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
    align: 'center',
    color: 'white', 

}
const centerText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default ReactJumbotron