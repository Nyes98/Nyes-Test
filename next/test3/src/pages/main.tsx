import styled from 'styled-components';
import { useState } from 'react';
import MainCarouselContainer from '../components/common/mainCarousel/Container';
import CenterCarouselContainer from '../components/common/centerCarousel/Container';

const MainContainer = () => {
    return (
        <>
            <MainCarouselContainer />
            <CenterCarouselContainer />
        </>
    );
};

export default MainContainer;

const Title = styled.h1`
    color: #2f5fd1;
    margin-left: 300px;
`;
