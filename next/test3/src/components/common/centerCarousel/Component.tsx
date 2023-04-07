import React from 'react';
import Slider from 'react-slick';

const settings = {
    centerMode: true,
    centerPadding: '101px',
    slidesToShow: 1,
};

const MySlider = () => {
    const centerSlideStyle = {
        width: '80%', // Adjust the width of the center slide here
    };

    return (
        <Slider {...settings}>
            <div>
                <h3>Slide 1</h3>
            </div>
            <div style={centerSlideStyle}>
                <h3>Slide 2</h3>
            </div>
            <div>
                <h3>Slide 3</h3>
            </div>
            <div>
                <h3>Slide 4</h3>
            </div>
            <div>
                <h3>Slide 5</h3>
            </div>
        </Slider>
    );
};

export default MySlider;
