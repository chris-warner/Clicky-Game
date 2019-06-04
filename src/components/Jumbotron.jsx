import React from 'react';
import {Jumbotron, Image} from 'react-bootstrap';
import background from '../img/background.jpg';

function ReactJumbotron () {
    return (
        <Jumbotron style={jumbotronStyle}>
              <h1>Clicky Game</h1>
              <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            {/* <Image src={background} alt={"background"}  style={imgStyle}/>     */}
        </Jumbotron>
        );

}
 const jumbotronStyle = {
     height:'400px',
     backgroundImage:background,
     backgroundSize: 'cover',
     align: 'center'
 }

 const imgStyle = {
     height:'100%',
     width:'100%',
     margin:'auto',
 }

export default ReactJumbotron