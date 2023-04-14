import styled from 'styled-components';
import BeginningCarousel_item from './BeginningCarousel_item';

type Props = {
    data: IRecentMintingData;
};
const RecentMinting: React.FC<Props> = ({ data }) => {
    return (
        <Wrap>
            <Title>{data.title}</Title>
            <ItemsBox>
                {data.item.map((item, index) => (
                    <Item key={`carou-${index}`}>
                        <CarouselItem>
                            <ImgBox>
                                <img src={`imgs/${item.img}.png`} alt={item.img} />
                            </ImgBox>
                            <PriceBox>
                                <Name>{item.name}</Name>
                                <Price>
                                    <img src="/imgs/MATIC1.png" alt="matic" />
                                    {item.price} MATIC
                                </Price>
                            </PriceBox>
                        </CarouselItem>
                    </Item>
                ))}
            </ItemsBox>
        </Wrap>
    );
};

export default RecentMinting;

const Wrap = styled.div`
    padding: 0 20px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 0.8rem;
    margin: 20px 0;
`;
const Item = styled.div`
    width: 46%;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
    }
`;

const ItemsBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

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
        height: 130px;
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
const Name = styled.div`
    font-size: 0.7rem;
    font-weight: 800;
    margin-bottom: 5px;
`;
