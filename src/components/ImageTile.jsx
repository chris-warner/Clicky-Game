import React, { useState } from 'react';
import {Image} from 'react-bootstrap';
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

function ImageTile() {
    const imageArray = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12];
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    console.log(getRandomInt(12));
    const [Clicked, setClicked] = useState(0);

    return (
        <div style={tileStyle}>
            <p>{getRandomInt(12)}</p>
            <Image style={imageStyle} src={[imageArray[getRandomInt(12)]]}></Image>
        </div>
    );
}

const imageStyle = {
    height:'150px',
    width:'150px'
}

const tileStyle = {
    height: '150px',
    width: '150px',
    backgroundColor: 'Black',
    borderColor: 'black',
    borderWidth: '2px',
    borderStyle: 'inline'
}

export default ImageTile;