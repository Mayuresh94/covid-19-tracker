import React, { useEffect, useState } from 'react';
import First from './first.png';
import Second from './second.png';
import Third from './third.png';
import Carousel from 'react-bootstrap/Carousel'


function Precaution() {
  return (
    <div className="container">
    <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">
    <Carousel style={{margin:"10px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={First}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Second}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Third}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
</div>
<div className="col-sm-2"></div>
</div>
)

}

export default Precaution
