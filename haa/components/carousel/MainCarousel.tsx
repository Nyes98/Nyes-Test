import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import NftList from '../nft/List';

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
        slidesToShow: 5.6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Wrap className="hear">
            <Slider {...settings}>
                {data1.map((item, index) => (
                    <NftList key={`car-${index}`} />
                ))}
            </Slider>
        </Wrap>
    );
};

const Wrap = styled.div`
    width: 1920px;
    padding: 60px 0;

    position: absolute;
    left: 40px;

    &.hear > div > div {
        overflow: visible;
    }
`;
const Item = styled.div``;

export default MainCarousel;
