import { useMemo } from 'react';
import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';

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

    /* useMemo to improve performance */
    const currentSlide = useMemo(
        () => slides[currentIndex],
        [currentIndex, slides]
    );
    return (
        <div>
            {slides.length > 1 && (
                <div>
                    <img
                        src={arrowLeft}
                        alt="arrow to switch to the left"
                        onClick={goToPrevious}
                    />
                    <img
                        src={arrowRight}
                        alt="arrow to switch to the right"
                        onClick={goToNext}
                    />
                </div>
            )}

            <div>
                <img src={currentSlide} alt="appartement interior" />
                <span>
                    {currentIndex + 1} / {slides.length}
                </span>
            </div>
        </div>
    );
}

export default Slider;
