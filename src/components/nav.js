import React from "react";
import Title from './Title.js';

function Nav() {
    return (
        <nav 
        style={navbar}
        >
        <Title title={"Clicky Game"} />
        </nav>
    );
}

const navbar = {
    height:'125px',
    backgroundColor: '#506FE5'
}

export default Nav