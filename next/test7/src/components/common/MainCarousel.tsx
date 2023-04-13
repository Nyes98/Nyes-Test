import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import MainCarousel_item from './MainCarousel_item';
import ICardData from '@/interfaces/card.interface';

type Props = {
    data: Array<ICardData>;
};

const MainCarousel: React.FC<Props> = ({ data }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        autoplay: true,
        autoplaySpeed: 8000,
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
                {data.map((item, index) => (
                    <Item key={`main-${index}`}>
                        <MainCarousel_item item={item}></MainCarousel_item>
                    </Item>
                ))}
            </Slider>
        </Wrap>
    );
};

export default MainCarousel;

const Wrap = styled.div`
    overflow: visible;
    margin: 30px 0;

    & > div > div > div {
        display: flex;
        padding: 20px 0;
    }
    & > div > div > div > div {
        margin: 0 5px;
    }
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
`;
