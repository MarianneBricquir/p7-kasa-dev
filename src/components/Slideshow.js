
import { useState } from 'react';
import iconLeft from '../img/arrow-left.svg';
import iconRight from '../img/arrow-right.svg';


const Slideshow = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    }

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const onePictureLeft = () => {
        if (pictures.length === 1) {
            return ("slideshow__left-arrow slideshow__left-arrow--hidden")
        } else {
            return ("slideshow__left-arrow")
        }
    }

    const onePictureRight = () => {
        if (pictures.length === 1) {
            return ("slideshow__right-arrow slideshow__right-arrow--hidden")
        } else {
            return ("slideshow__right-arrow")
        }
    }

    const onePictureBullet = () => {
        if (pictures.length === 1) {
            return ("slideshow__bullet-point slideshow__bullet-point--hidden")
        } else {
            return ("slideshow__bullet-point")
        }
    }


    return (
        <div className='slideshow-container'>
            <div className='slideshow'>
                <img src={iconLeft} className={onePictureLeft()} alt="flèche gauche du carrousel" onClick={goToPrevious} />
                <img src={iconRight} className={onePictureRight()} alt="flèche droite du carrousel" onClick={goToNext} />
                <div className={onePictureBullet()}>{currentIndex + 1} / {pictures.length} </div>
                <div className='slideshow__img' style={{ backgroundImage: `url(${pictures[currentIndex]})` }}></div>
            </div >

        </div>
    );
};

export default Slideshow;