import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/bg.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img2 from '../assets/bg2.jpg'

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}  >
        <div>
          <img src={img1} alt="item1" />

          <p className='legend'>meme background</p>

        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className='legend'>templates</p>

        </div>

      
        <div>
          <img src={img1} alt="item1" />

          <p className='legend'>meme background</p>

        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className='legend'>templates</p>

        </div>

      </Carousel>
      </div>
  )
}

export default Services