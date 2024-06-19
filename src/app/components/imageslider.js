"use client";

import React, {useState} from 'react'; 
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'; 
import { RxDotFilled } from 'react-icons/rx'; 

function Slides({ imageIndex }) {
    const slides = [
        {
            src: "../pictures/zv3ew-ag.jpeg"
        }, 
       
        {
            src: "../pictures/sudavikurhlið.jpg"
        },
       
        {
            src: "../pictures/mynd5.jpeg"
        },

       

        {
            src: "../pictures/mynd4.jpeg"
        },
    ]; 

    const [currentIndex, setCurrentIndex] = useState(0); 

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0; 
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1; 
        setCurrentIndex(newIndex);

    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1; 
        const newIndex = isLastSlide ? 0 : currentIndex + 1; 
        setCurrentIndex(newIndex); 
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex); 

    }; 

    return (
        <div className='max-w-full h-[720px] w-full m-auto relative group z-0 pt-[0px]'>
             <div 
                style={{ backgroundImage: `url(${slides[currentIndex].src})` }} 
                className='w-full h-full bg-center bg-cover duration-[0.6s] '
            ></div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={50} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={50}/>
            </div>
            <div  className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) =>(
             <div   
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className ='text-2xl cursor-pointer'>      
                        <RxDotFilled />
                    </div>
                ))}

            </div>
        </div> 
           
    );
}

export default Slides;





