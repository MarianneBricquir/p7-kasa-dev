import { React } from 'react';
import { NavLink } from "react-router-dom";
import logoColored from '../img/logo-colored.svg';

const Header = () => {

    return (
        <header>
            <img className="logo-colored" src={logoColored} alt="Logo de l'entreprise Kasa" />
            <nav>
                <ul>
                    <NavLink to="/accueil" className={(nav_item) => (nav_item.isActive ? "nav_item-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/apropos" className={(nav_item) => (nav_item.isActive ? "nav_item-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav >
        </header >
    );
};

export default Header;