import React from 'react'
import { Link } from 'react-router-dom'

const StaticSlider = () => {
  return (
    <div className="carousel carousel-slider black" data-indicators="true">
      <Link to="#!" className="carousel-item">
        <img src="https://lorempixel.com/800/400/food/1" alt="Slide 1" className="responsive-img" />
      </Link>
      <Link to="#!" className="carousel-item">
        <img src="https://lorempixel.com/800/400/food/2" alt="Slide 1" className="responsive-img" />
      </Link>
    </div>
  )
}

export default StaticSlider