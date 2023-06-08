'use client';
import { styled } from 'styled-components';

export default function Web3Card() {
    return (
        <Wrap>
            <ImgBox>
                <img src="imgs/web3_card.svg" alt="card" />
            </ImgBox>
            <Title>WEB 3.0 국내 최초 서비스 HNOMICS 플랫폼</Title>
            <Sub>오직 HNOMICS 에서만 만날 수 있는 웹 3.0 플랫폼 새롭게 선보입니다!</Sub>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 32%;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 50px;
    margin: 20px 0;

    div {
        margin: 15px 0;
    }
`;

const ImgBox = styled.div``;

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
`;

const Sub = styled.div`
    font-size: 1.2rem;
    color: #424242;
`;
