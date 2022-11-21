import React from "react";
import iconStarPink from '../img/star-pink.svg'
import iconStar from '../img/star.svg';


const Rating = ({ rating }) => {

    // create [1,2,3,4,5] once
    const starArray = [...Array(5).keys()].map(i => i + 1);
    return (
        <div className='stars-container'>
            {starArray.map(i => ( // use many times
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