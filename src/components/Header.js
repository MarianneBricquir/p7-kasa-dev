//import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

    //const [item, setItem] = useState("accueil");
    console.log(window.location.pathname)

    // Tester : 
    // avec un useState

    return (
        <header>
            <img className="logo-colored" src="./logo-colored.svg" alt="Logo de l'entreprise Kasa" />
            <nav>
                <ul>
                    <NavLink to="/" className={(item) => (item.isActive ? "item-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/apropos" className={(item) => (item.isActive ? "item-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;