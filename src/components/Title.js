import React from "react";

function Title (props) {
    return (
        <h1 
        style={titleStyle}
        >
        {props.title}
        </h1>
    );
}

const titleStyle = {
  color:'white',
  fontSize:'50px',
  margin:'auto'
}

export default Title