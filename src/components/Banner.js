import React from 'react';
import PropTypes from 'prop-types';


const Banner = ({ image, alt, bannerText }) => {
    return (
        <div className="banner">
            <div className="banner__image">
                <img src={image} alt={alt} />
            </div>
            <div className="banner__background">
                <div className="banner__background__text">{bannerText}</div>
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    bannerText: PropTypes.string
};

Banner.defaultProps = {
    image: "../img/img-accueil.jpg",
    alt: "Illustration de la page dans une bannière (image de nature)",
    bannerText: ""
};