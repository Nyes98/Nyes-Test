import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';

type Props = {
    data?: any;
    type?: string;
};

type StyledProps = {
    type?: string;
};

const MainCarousel: React.FC<Props> = ({ data, type }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const data1 = [1, 2, 3, 4, 5, 6];

    return (
        <Wrap className="hear">
            <Slider {...settings}>
                {data1.map((item, index) => (
                    <Item key={`main-${index}`}>
                        <img src="/imgs/main_wallet.svg" alt="imsi" />
                    </Item>
                ))}
            </Slider>
        </Wrap>
    );
};

const Wrap = styled.div`
    height: 300px;
`;
const Item = styled.div``;

export default MainCarousel;
