import React from 'react'
import '../styles/slider.css'
import { Carousel } from 'react-responsive-carousel'

const Slider = ({slideshow}) => {

  return (
    <Carousel 
      autoPlay={true}
      interval={3500} 
      infiniteLoop={true}
      showThumbs={false}
      centerMode={false}
      transitionTime={850}
      showStatus={false}
    >
      {slideshow && slideshow.map(slide => {
        const styles = {
          backgroundImage: 'url(' + slide.imageURL + ')',
          height: '500px',
          backgroundSize: 'cover'
        }
        return (
          <div style={styles} key={slide.id}></div>
        )
      })}
    </Carousel>
  )

}

export default Slider