import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../img/logo-white.svg';


const Footer = () => {
    return (
        <footer>
            <NavLink to="/accueil"><img className="logo-white" src={logo} alt="Logo de l'entreprise Kasa" /></NavLink>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;