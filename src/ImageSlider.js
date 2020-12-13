import React, { useState, useEffect } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

export const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    const timer = setInterval(() =>{ nextSlide()},2000)
    return () => {
      clearInterval(timer)
    }
  }, [current])
  
  if(!Array.isArray(slides) || slides.length ===0){
    return null;
  }
  const nextSlide = () => {
    setCurrent( current === length-1 ? 0 : current +1)
  }
  const prevSlide = () => {
    setCurrent( current ===  0 ? length -1 : current -1)
  }
  return (
    <section className="ImageSlider">
       <div className="slider-count-info">{`${current + 1} / ${length}`}</div>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {
        slides.map( (src, index) => {
          return (
            <div className={ index===current ? 'slide active': 'slide'} key={index}>
              {index===current && <img src={src.image} alt="Image" className="Image"/>}
            </div>
          )
        })
      }
      <div className="slider-indicator-container">
        {
          slides.map( (src, index) => {
            return (
              <span 
                className={ index===current ? 'slide-indicator active': 'slide-indicator'} 
                key={index}
                onClick={e => setCurrent(index)}
              >
              </span>
            )
          })
        }
      </div>
    </section>
  )
}
