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

    return (
        <div>
            <img
                src={arrowLeft}
                alt="arrow to switch to the left"
                onClick={goToPrevious}
                className={slides.length > 1 ? 'arrow-left' : 'hidden-arrow'}
            />

            <img
                src={arrowRight}
                alt="arrow to switch to the right"
                onClick={goToNext}
                className={slides.length > 1 ? 'arrow-right' : 'hidden-arrow'}
            />

            <div>
                {slides.map((slide, slideIndex) => {
                    return (
                        <div key={slideIndex}>
                            {slideIndex === currentIndex && (
                                <img src={slide} alt="appartement interior" />
                            )}

                            {slideIndex === currentIndex && (
                                <span>
                                    {currentIndex + 1} / {slides.length}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;
