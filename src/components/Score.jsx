import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Score (props) {
    return (
        <Navbar.Text> Score: {props.score} | Top Score: {props.topscore} </Navbar.Text>
    );
}

export default Score