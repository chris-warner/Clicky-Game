import React, { useState } from 'react';
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
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    console.log(getRandomInt(12));
    const [Clicked, setClicked] = useState(0);

    return (
        <div style={tileStyle}>
            <p>{getRandomInt(12)}</p>
        </div>
    );
}

const tileStyle = {
    height: '150px',
    width: '150px',
    backgroundColor: 'Orange',
    borderColor: 'black',
    borderWidth: '2px',
    borderStyle: 'inline'
}

export default ImageTile;