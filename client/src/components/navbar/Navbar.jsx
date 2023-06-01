import React from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className= "navbar">
            <div className="container">
                <div className= "navbar__header"> MERN SOCIAL</div>
                <div className="navbar__login"><NavLink to="/login">Увiйти</NavLink></div>
                <div className="navbar__registration"><NavLink to="registration">Зарееструватися</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;