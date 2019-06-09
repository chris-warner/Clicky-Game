import React,{useState} from 'react';


function ImageTile () {
    const [Clicked, setClicked] = useState(0);

    return(
        <div style={tileStyle}>
            <p>imageTile</p>
        </div>
    );
}

const tileStyle = {
height:'150px',
width:'150px',
backgroundColor:'Orange',
borderColor:'black',
borderWidth:'2px',
borderStyle:'inline'
}

export default ImageTile;