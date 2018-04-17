import React from "react"; 

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-default navbar-fixed-top mb-4">
        <div className="container">

            <h1 className="text-white">Flip Click</h1>

            <span className="game-message text-white navbar-text">{props.Message}</span>

            <span className="text-white navbar-text">Score: {props.count}  |  Top Score: {props.topScore}</span>

        </div>

    </nav>
);

export default Navbar;