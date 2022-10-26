
import { useState } from 'react';
import icon from '../img/dropdown-open.svg'


const Slideshow = ({ pictures }) => {

    console.log(pictures)

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

    // className={(pictures) => (pictures.length > 1 ? "slideshow__left-arrow" : "slideshow__left-arrow slideshow__left-arrow--hidden ")}

    return (
        <div className='slideshow-container'>
            <div className='slideshow'>
                <img src={icon} className={onePictureLeft()} alt="flèche gauche du carrousel" onClick={goToPrevious} />
                <img src={icon} className={onePictureRight()} alt="flèche droite du carrousel" onClick={goToNext} />
                <div className={onePictureBullet()}>{currentIndex + 1} / {pictures.length} </div>
                <div className='slideshow__img' style={{ backgroundImage: `url(${pictures[currentIndex]})` }}></div>
            </div >

        </div>
    );
};

export default Slideshow;