import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Carousel = ({ children: slide, autoSlide, autoSlideInterval }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide(oldCurrentSlide => oldCurrentSlide === 0 ? slide.length - 1 : oldCurrentSlide - 1);
    }
    const handleNext = () => {
        setCurrentSlide(oldCurrentSlide => oldCurrentSlide === slide.length - 1 ? 0 : oldCurrentSlide + 1);
    }
    
    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(() => {
            setCurrentSlide(oldCurrentSlide => oldCurrentSlide === slide.length - 1 ? 0 : oldCurrentSlide + 1);
        }, autoSlideInterval);
        return () => clearInterval(interval);
    }, [currentSlide, slide.length, autoSlide, autoSlideInterval]);

    return (
        <div className='overflow-hidden relative w-[300px] rounded-2xl'>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slide}
            </div>

            <button
                onClick={handleNext}
                className='absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-2'
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            
            <button
                onClick={handlePrev}
                className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-2'
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <div className='absolute bottom-5 right-0 left-0'>
                <div className="flex items-center justify-center gap-2">
                    {slide.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-3 h-3 rounded-full cursor-pointer ${idx === currentSlide ? 'bg-red-500' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSlide(idx)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel
