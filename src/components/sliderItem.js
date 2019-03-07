import React from 'react'
import '../styles/slider.css'

const SliderItem = ({slide}) => {
  return (
    <img
      className="responsive-img slider-bg"
      src={slide.imageURL}
      alt={slide.title}
    />
  )
}

export default SliderItem
