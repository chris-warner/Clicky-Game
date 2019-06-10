import React, {useState,useEffect} from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import image1 from '../img/galaxy1.jpg';
import image2 from '../img/galaxy2.jpg';
import image3 from '../img/galaxy3.jpeg';
import image4 from '../img/galaxy4.jpeg';
import image5 from '../img/galaxy5.jpeg';
import image6 from '../img/galaxy6.jpeg';
import image7 from '../img/galaxy7.png';
import image8 from '../img/galaxy8.jpg';
import image9 from '../img/galaxy9.jpg';
import image10 from '../img/galaxy10.jpg';
import image11 from '../img/galaxy11.jpg';
import image12 from '../img/galaxy12.jpg';
import {Image} from 'react-bootstrap';

function ImageGrid () {

      const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
      let shuffledImageArray = shuffle(imageArray);

      function shuffleImages() {
        shuffledImageArray = shuffle(imageArray);
      }
     
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
        return (
            <Container>
            <Row style={rowStyle} className="justify-content-md-center">
              <Col style={colStyle}>1 of 3 <Image style={imgStyle} src={shuffledImageArray[0]}/> </Col>
              <Col style={colStyle}>2 of 3 <Image style={imgStyle} src={shuffledImageArray[1]}/> </Col>
              <Col style={colStyle}>3 of 3 <Image style={imgStyle} src={shuffledImageArray[2]}/> </Col>
            </Row>
            <Row style={rowStyle}>
              <Col style={colStyle}>1 of 3 <Image style={imgStyle} src={shuffledImageArray[3]}/></Col>
              <Col style={colStyle}>2 of 3 <Image style={imgStyle} src={shuffledImageArray[4]}/></Col>
              <Col style={colStyle}>3 of 3 <Image style={imgStyle} src={shuffledImageArray[5]}/></Col>
            </Row>
            <Row style={rowStyle}>
              <Col style={colStyle}>1 of 3 <Image style={imgStyle} src={shuffledImageArray[6]}/></Col>
              <Col style={colStyle}>2 of 3 <Image style={imgStyle} src={shuffledImageArray[7]}/></Col>
              <Col style={colStyle}>3 of 3 <Image style={imgStyle} src={shuffledImageArray[8]}/></Col>
            </Row>
          </Container>
        );
    }

    const imgStyle ={
      height: '100px',
      width:'100px'
    }

const colStyle = {
    height: '300px',
    width: '300px'
  }
  
  const rowStyle = {
    height: '300px',
     width:'100%'
  }

export default ImageGrid;