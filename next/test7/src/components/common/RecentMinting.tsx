import styled from 'styled-components';
import BeginningCarousel_item from './BeginningCarousel_item';

const RecentMinting = () => {
    return (
        <Wrap>
            <Title>최근 민팅 된 위스키들</Title>
            <ItemsBox>
                <Item>
                    <BeginningCarousel_item />
                </Item>
                <Item>
                    <BeginningCarousel_item />
                </Item>
                <Item>
                    <BeginningCarousel_item />
                </Item>
                <Item>
                    <BeginningCarousel_item />
                </Item>
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
