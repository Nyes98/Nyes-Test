import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderBox>
            <Wrap>
                <div>
                    <img src="/imgs/logo.png" alt="logo" />
                </div>
                <Search>
                    <img src="/imgs/search.svg" alt="search" />
                </Search>
            </Wrap>
        </HeaderBox>
    );
};

export default Header;

const HeaderBox = styled.div``;
const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 15px 0;
`;

const Search = styled.div`
    display: flex;

    img {
        width: 20px;
    }
`;
