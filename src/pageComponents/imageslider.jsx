import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../asset/gedung.svg';
import './image.css';
import d from '../asset/FAQ.svg';

const ImageSlider = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src={d} alt="" />
        <p className="legend">Penjelasan gambar 1</p>
      </div>
      <div>
        <img src={logo} alt="" />
        <p className="legend">Penjelasan gambar 2</p>
      </div>
      <div>
        <img src={logo} alt="" />
        <p className="legend">Penjelasan gambar 3</p>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
