import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import BeginningCarousel_item from './BeginningCarousel_item';
import MainCarousel_item from './MainCarousel_item';

const MainCarousel = () => {
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
            img1: 'main1',
            img2: 'bottle1',
            title: '존윅이 마시는 위스키는 어떨까요?',
            contents: '최초의 싱글 배럴 버번 블랑톤을 \n 윈윈에서 지금 만나보세요!',
        },
        {
            img1: 'main1',
            img2: 'bottle1',
            title: '존윅이 마시는 소주는 어떨까요?',
            contents: '나는 모르겠으니 \n 너가 알아봐주세요!',
        },
        {
            img1: 'main1',
            img2: 'bottle1',
            title: '존윅이 마시는 와인은 어떨까요?',
            contents: '최초의 최초의 최초의 최초의 최초의 \n 최초의 최초의 최초의!',
        },
    ];

    return (
        <Wrap className="hear">
            <Slider {...settings}>
                {Imsi.map((item, index) => (
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
