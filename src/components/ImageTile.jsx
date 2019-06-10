import React, {useState,useEffect} from 'react';
import {Image} from 'react-bootstrap';

function ImageTile () {
    const [imageSrc, setImageSrc] = useState("");
    const [count, setCount] = useState(0);

    const setSrc = (props) => {
    setImageSrc(props);
    return
    }

    return(
        <div>
        <h1 onClick={() => setCount(count + 1)} >{count}</h1>
        <Image src={imageSrc} />
        </div>
    );
}

export default ImageTile;