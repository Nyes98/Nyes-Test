import styled from "styled-components";

type Props = {};
const HeaderComponent: React.FC<Props> = ({}) => {
  return (
    <HeaderBox>
      <Wrap>
        <Title>
          <div>
            <img src="/imgs/header/logo.png" alt="Logo" />
          </div>
          <div>WinenWin</div>
        </Title>
        <img src="/imgs/header/search.svg" alt="search" />
      </Wrap>
    </HeaderBox>
  );
};

export default HeaderComponent;

const HeaderBox = styled.div`
  background-color: red;
`;

const Wrap = styled.div`
  max-width: 360px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  img {
    width: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    margin-top: 15px;
    margin-right: 5px;
  }
`;
