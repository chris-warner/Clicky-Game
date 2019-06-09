import React from "react";
import {Row,Col,Container} from 'react-bootstrap';
import ImageTile from '../components/ImageTile';

class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = 0;
    }
    render() {
        return (
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
        );
    }
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