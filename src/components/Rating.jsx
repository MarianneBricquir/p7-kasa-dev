import React from "react";
import iconStarPink from '../img/star-pink.svg'
import iconStar from '../img/star.svg';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {

    // création d'un tableau [1,2,3,4,5]
    const starArray = [...Array(5).keys()].map(i => i + 1);


    return (
        <div className='stars-container'>
            {starArray.map(i => ( 
                <img
                    key={i}
                    src={rating >= i ? `${iconStarPink}` : `${iconStar}`}
                    alt="stars"
                />
            ))}
        </div>
    )
}

export default Rating;

Rating.propTypes = {
    rating: PropTypes.string
}