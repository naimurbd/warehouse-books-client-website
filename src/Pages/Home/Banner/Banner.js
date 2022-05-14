import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


import banner2 from '../../../Images/Banner/Banner2.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-primary'>WareHouse Books</h1>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    );
};

export default Banner;