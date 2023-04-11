import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import MainCarousel_item from './MainCarousel_item';

const SimpleSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '75px',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 280,
                settings: {
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <Wrap className="hear">
            <Slider {...settings}>
                <Item>
                    <MainCarousel_item />
                </Item>
                <MainCarousel_item />
                <Item>
                    <MainCarousel_item />
                </Item>
                <MainCarousel_item />
                <Item>
                    <MainCarousel_item />
                </Item>
                <MainCarousel_item />
                <Item>
                    <MainCarousel_item />
                </Item>
                <MainCarousel_item />
                <Item>
                    <MainCarousel_item />
                </Item>
                <MainCarousel_item />
                <Item>
                    <MainCarousel_item />
                </Item>
            </Slider>
        </Wrap>
    );
};

export default SimpleSlider;

const Wrap = styled.div`
    overflow: visible;
    margin: 30px 0;

    & > div > div > div {
        display: flex;
        padding: 20px 0;
    }
    & > div > div > div > div {
        margin: 0 20px;
    }
    .slick-center {
        transform: scale(1.2);

        transition: transform 0.35s ease-in-out;
    }
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
`;
