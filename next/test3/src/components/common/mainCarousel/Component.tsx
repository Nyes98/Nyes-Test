import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

export default class MainSlider extends Component {
    render() {
        const settings = {
            dots: false,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <Wrap>
                <Slider {...settings}>
                    <Item>
                        <img src="/imgs/main1.png" alt="main" />
                    </Item>
                    <Item>
                        <img src="/imgs/main1.png" alt="main" />
                    </Item>
                    <Item>
                        <img src="/imgs/main1.png" alt="main" />
                    </Item>
                </Slider>
            </Wrap>
        );
    }
}

const Item = styled.div`
    img {
        border-radius: 10px;
    }
`;

const Wrap = styled.div`
    position: relative;
    left: 50px;
`;
