import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import CBZ from "../img/Common/CBZ.jpeg";
import DD from "../img/Common/DD-2.jpg";
import HRS from "../img/Common/HORS-common.jpeg";


export default function CarouselHeader() {
    return (
        <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CBZ}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={DD}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={HRS}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
    );
}