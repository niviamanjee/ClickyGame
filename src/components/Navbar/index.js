import React from "react";


function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{props.children}</span>
            <p>User Score= {props.userScore} | High Score={props.highScore}</p>
            {/* <p>{props.message}</p> */}
        </nav>);
}

export default Navbar;
