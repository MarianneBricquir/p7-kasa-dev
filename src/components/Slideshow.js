
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

    return (
        <div className='slideshow-container'>
            <div className='slideshow'>
                {/* Conditions ternaires si pictures.lenght === 1 pour ne pas afficher les flèches ni les bullets points avec le nombre d'img*/}
                <img
                    src={iconLeft}
                    className={pictures.length === 1 ? "slideshow__left-arrow slideshow__left-arrow--hidden" : "slideshow__left-arrow"}
                    alt="flèche gauche du carrousel"
                    onClick={goToPrevious}
                />
                <img
                    src={iconRight}
                    className={pictures.length === 1 ? "slideshow__bullet-point slideshow__bullet-point--hidden" : "slideshow__right-arrow"}
                    alt="flèche droite du carrousel"
                    onClick={goToNext}
                />
                <div className={pictures.length === 1 ? "slideshow__bullet-point slideshow__bullet-point--hidden" : "slideshow__bullet-point"}>
                    {currentIndex + 1} / {pictures.length}
                </div>
                <div className='slideshow__img' style={{ backgroundImage: `url(${pictures[currentIndex]})` }}></div>
            </div >

        </div>
    );
};

export default Slideshow;