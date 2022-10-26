import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="pages">
            <div className="notfound">
                <div className="notfound__content">
                    <div className="notfound__content__erreur">404</div>
                    <div className="notfound__content__text">Oups! La page que vous demandez n'existe pas.</div>
                </div>
                <Link to="/accueil" className="notfound__back-to-home">
                    Retournez à l'accueil
                </Link>
            </div>
        </div>
    );
};

export default NotFound;