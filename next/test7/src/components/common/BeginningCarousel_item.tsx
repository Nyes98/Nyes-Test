import styled from 'styled-components';

const BeginningCarousel_item = () => {
    return (
        <CarouselItem>
            <ImgBox>
                <img src="/imgs/bottle1.png" alt="b1" />
            </ImgBox>
            <PriceBox>
                <Title>발렌타인 12년산</Title>
                <Price>
                    <img src="/imgs/MATIC1.png" alt="matic" /> 400 MATIC
                </Price>
            </PriceBox>
        </CarouselItem>
    );
};

export default BeginningCarousel_item;

const CarouselItem = styled.div`
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 3px 5px 5px 1px rgb(0, 0, 0, 0.2);
`;
const ImgBox = styled.div`
    background-color: lightgray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
        width: 25px;
        margin: auto;
        padding: 20px 0;
    }
`;
const PriceBox = styled.div`
    padding: 10px;
    border: 1px solid lightgray;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;
const Price = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.65rem;
    img {
        width: 10px;
        height: 10px;
        margin-right: 5px;
    }
`;
const Title = styled.div`
    font-size: 0.7rem;
    font-weight: 800;
    margin-bottom: 5px;
`;
