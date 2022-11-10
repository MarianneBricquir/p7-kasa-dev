import React from 'react';
import logo from '../img/logo-white.svg';


const Footer = () => {
    return (
        <footer>
            <img className="logo-white" src={logo} alt="Logo de l'entreprise Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;