import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import BeginningCarousel_item from './BeginningCarousel_item';
import MainCarousel_item from './MainCarousel_item';

const CardCarousel = () => {
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

    const Imsi = [
        {
            img1: 'membership1',
            img2: 'card1',
            title: '윈윈만의 구독 시스템 제네시스 멤버십',
            contents: '지금 바로 가입해보세요!',
        },
        {
            img1: 'membership1',
            img2: 'card1',
            title: '두번째',
            contents: '가입해라',
        },
        {
            img1: 'membership1',
            img2: 'card1',
            title: '멤버십 멤버십 멤버십 멤버십 멤버십',
            contents: '지금 지금 지금!',
        },
    ];
    return (
        <Wrap className="hear">
            <Slider {...settings}>
                {Imsi.map((item, index) => (
                    <Item key={`card-${index}`}>
                        <MainCarousel_item item={item} />
                    </Item>
                ))}
            </Slider>
        </Wrap>
    );
};

export default CardCarousel;

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
