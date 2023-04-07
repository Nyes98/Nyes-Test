import styled from 'styled-components';

type Props = {};
const HeaderComponent: React.FC<Props> = ({}) => {
    return (
        <HeaderBox>
            <Wrap>
                <Title>
                    <div>
                        <img src="/imgs/header/logo.png" alt="Logo" />
                    </div>
                </Title>
                <img src="/imgs/header/search.svg" alt="search" />
            </Wrap>
        </HeaderBox>
    );
};

export default HeaderComponent;

const HeaderBox = styled.div``;

const Wrap = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 90%;
    img {
        width: 20px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 140px;
        margin-right: 5px;
        padding: 10px;
    }
`;
