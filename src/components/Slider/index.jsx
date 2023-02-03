/***     SLIDER COMPONENT     ***/

/* Importing useMemo and useSate hooks, assets and style */
import { useMemo } from 'react';
import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import '../../styles/Slider.css';

/* Slider function using slides prop */
/* Hook useState to manage current slide index */
/* Handler onClick with goToPrevious and goToNext function to go to the previous or next slide and set the newIndex */
/* Hook useMemo to improve performance keeping track of the current index */
function Slider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const currentSlide = useMemo(
        () => slides[currentIndex],
        [currentIndex, slides]
    );

    return (
        <section className="slider-container">
            {slides.length > 1 && (
                <div>
                    <img
                        src={arrowLeft}
                        alt="arrow to switch to the left"
                        onClick={goToPrevious}
                        className="left-arrow"
                    />
                    <img
                        src={arrowRight}
                        alt="arrow to switch to the right"
                        onClick={goToNext}
                        className="right-arrow"
                    />
                </div>
            )}

            <div className="slider-container__slide">
                <img
                    src={currentSlide}
                    alt="appartement interior"
                    className="slider-picture"
                />
                <span className="slider-index">
                    {currentIndex + 1} / {slides.length}
                </span>
            </div>
        </section>
    );
}

/* Exporting Slider component */
export default Slider;
