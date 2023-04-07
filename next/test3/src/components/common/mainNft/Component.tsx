import styled from 'styled-components';

const MainNft = () => {
    return (
        <Wrap>
            <ImgBox>
                <img src="./imgs/main1.png" alt="main" />
            </ImgBox>
            <ContentsBox>
                <div>발렌타인 12년산</div>
                <div>400 MATIC</div>
            </ContentsBox>
        </Wrap>
    );
};

export default MainNft;

const Wrap = styled.div`
    text-align: center;
    margin: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 1px 4px 1px gray;
`;
const ImgBox = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 30px 0;
    img {
        width: 100px;
    }
    background-color: #eeeeee;
`;
const ContentsBox = styled.div``;
