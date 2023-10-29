import React, { useState } from 'react'
import img1 from './assets/img-1.jpg'
import img2 from './assets/img-2.jpg'
import img3 from './assets/img-3.jpg'
import img4 from './assets/img-4.jpg'
import Carousel from './Carousel'


const App = () => {
  const [auto, setAuto] = useState(false);
  const [stateName, setStateName] = useState();
  
  
  
  const images = [img1, img2, img3, img4];

  const handleAuto = () => {
    setAuto(oldAuto => !oldAuto);
  }

  return (
    <div className='max-w-lg m-auto flex flex-col items-center justify-center pt-8'>
      <Carousel
        autoSlide={auto}
        autoSlideInterval={3000}
        className='w-[300px] h-[450px]'
      >
        {images.map(img => <img src={img} className='rounded-2xl' alt='carousel' key={img} />)}
      </Carousel>
      <button
        onClick={handleAuto}
        className=' mt-6 rounded-md font-bold bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition-all ease-in-out duration-300'>Auto Transition</button>
    </div>
  )
}

export default App
