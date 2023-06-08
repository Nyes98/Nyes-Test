import { styled } from 'styled-components';

export default function NftList() {
    return (
        <Wrap>
            <ImgBox></ImgBox>
            <InfoBox>
                <div>#20</div>
                <div>Whiskey Name</div>
                <div>
                    <img src="imgs/matic.svg" alt="matic" /> 500 MATIC
                </div>
            </InfoBox>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 313px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`;
const ImgBox = styled.div`
    background-image: url('imgs/nft_bg.svg');
    width: 100%;
    height: 313px;
`;
const InfoBox = styled.div`
    height: 175px;
    padding: 20px;
    font-weight: 700;

    div {
        margin: 10px 0;
        display: flex;
    }

    div:nth-child(2) {
        font-size: 1.2rem;
    }

    img {
        margin-right: 10px;
    }
`;
