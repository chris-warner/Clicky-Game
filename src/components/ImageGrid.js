import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
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
import { Image } from 'react-bootstrap';
import { Navbar, Jumbotron } from 'react-bootstrap';
import Counter from './Counter';
import background from '../img/background.jpg';

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      TopScore: 0
    };

  }


  render() {



    const checkScore = (key) => {
      console.log(key)
      for (let item of shuffledImageArray) {
        if (item.key === key) {
          if(item.isClicked === true) {
            TopScore=score;
            score=0;
          } else if(item.isClicked === false) {
            score++;
          }
          item.isClicked = true;
        }
      }


      const newShuffle = shuffle(shuffledImageArray);
      this.forceUpdate();
      console.log(newShuffle)
      console.log(score);

    }

    this.componentDidUpdate = () => {
      console.log("updated");

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

    let imageObject1, imageObject2, imageObject3, imageObject4, imageObject5, imageObject6, imageObject7, imageObject8, imageObject9, imageObject10, imageObject11, imageObject12;
    const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];



    const imageObjectArray = [

      imageObject1 = {
        key: 1,
        image: image1,
        isClicked: false
      },
      imageObject2 = {
        key: 2,
        image: image2,
        isClicked: false
      },
      imageObject3 = {
        key: 3,
        image: image3,
        isClicked: false
      },
      imageObject4 = {
        key: 4,
        image: image4,
        isClicked: false
      },
      imageObject5 = {
        key: 5,
        image: image5,
        isClicked: false
      },
      imageObject6 = {
        key: 6,
        image: image6,
        isClicked: false
      },
      imageObject7 = {
        key: 7,
        image: image7,
        isClicked: false
      },
      imageObject8 = {
        key: 8,
        image: image8,
        isClicked: false
      },
      imageObject9 = {
        key: 9,
        image: image9,
        isClicked: false
      },
      imageObject10 = {
        key: 10,
        image: image10,
        isClicked: false
      },
      imageObject11 = {
        key: 11,
        image: image11,
        isClicked: false
      },
      imageObject12 = {
        key: 12,
        image: image12,
        isClicked: false
      }
    ];

    let shuffledImageArray = shuffle(imageObjectArray);

    function shuffleImages() {
      shuffledImageArray = shuffle(imageArray);
    }
    return (
      <div>
        <Navbar fluid bg="light">
          <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
          <Navbar.Text>Click an image to begin! </Navbar.Text>
          <Navbar.Text style={navCounter}>
            Score: {score}
            Top Score: {TopScore}
          </Navbar.Text>);
        </Navbar>
        <Jumbotron style={jumbotronStyle}>
          <h1>Clicky Game</h1>
          <h2 style={centerText}>Click on an image to earn points, but don't click on any more than once!</h2>
        </Jumbotron>
        <Container>
          <Row style={rowStyle} className="justify-content-md-center">
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[0].image} onClick={() => { checkScore(shuffledImageArray[0].key) }} /> </Col>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[1].image} onClick={() => { checkScore(shuffledImageArray[1].key) }} /> </Col>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[2].image} onClick={() => { checkScore(shuffledImageArray[2].key) }} /> </Col>
          </Row>
          <Row style={rowStyle}>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[3].image} onClick={() => { checkScore(shuffledImageArray[3].key) }} /></Col>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[4].image} onClick={() => { checkScore(shuffledImageArray[4].key) }} /></Col>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[5].image} onClick={() => { checkScore(shuffledImageArray[5].key) }} /></Col>
          </Row>
          <Row style={rowStyle}>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[6].image} onClick={() => { checkScore(shuffledImageArray[6].key) }} /></Col>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[7].image} onClick={() => { checkScore(shuffledImageArray[7].key) }} /></Col>
            <Col style={colStyle}><Image style={imgStyle} src={shuffledImageArray[8].image} onClick={() => { checkScore(shuffledImageArray[8].key) }} /></Col>
          </Row>
        </Container>
      </div>
    );
  };
}

const imgStyle = {
  height: '200px',
  width: '200px'
}

const colStyle = {
  height: '300px',
  width: '300px'
}

const rowStyle = {
  height: '300px',
  width: '100%'
}
const counterStyle = {
  margin: '0 auto'
}

const jumbotronStyle = {
  height: '400px',
  backgroundImage: 'url(' + background + ')',
  backgroundSize: 'cover',
  align: 'center',
  color: 'white',
}

const navCounter = {
  margin:'0 auto',
  float: 'none',
  position:'absolute',
  right:'10px'

}
const centerText = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

let score = 0, TopScore = 0;

export default ImageGrid;