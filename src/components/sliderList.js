import React from 'react'
import SliderItem from './sliderItem'
import { Link } from 'react-router-dom'

const SliderList = ({ slideshow }) => {
  return (
    <>
      {slideshow && slideshow.map(slide => {
        return (
          <Link to='#!' key={slide.id} className="carousel-item">
            <SliderItem slide={slide} />
          </Link>
          // <SliderItem key={slide.id} slide={slide} />
        )
      })}
    </>
  )
}

export default SliderList