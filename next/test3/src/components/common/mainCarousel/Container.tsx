import styled from 'styled-components';
import MainSlider from './Component';

const MainCarouselContainer = () => {
    return (
        <Wrap className="Wrap">
            <MainSlider></MainSlider>
        </Wrap>
    );
};

export default MainCarouselContainer;

const Wrap = styled.div`
    & > div > div > div {
        overflow: visible;
    }
`;
