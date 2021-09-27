import React from 'react'
import Carousel from '../components/carousel/Carousel'
import CarouselItem from '../components/carousel/carousel-item/CarouselItem'

function contacts() {
    return (
      <div>
        <Carousel>
          <CarouselItem>Silder 1</CarouselItem>
          <CarouselItem>Silder 2</CarouselItem>
          <CarouselItem>Silder 3</CarouselItem>
        </Carousel>
      </div>
    );
}

export default contacts
