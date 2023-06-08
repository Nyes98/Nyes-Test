'use client';
import { styled } from 'styled-components';

export default function SpotSection() {
    return (
        <Wrap>
            <Title>
                WHISKEY
                <span> SPOT</span>
            </Title>
            <Sub>
                <div>저희가 마련한 ‘위스키 스팟’이란 커뮤니티 공간에서</div>
                <div>위스키 관련 맛집과 정보들을 유저들과 함께 공유하고 소통해보세요 !</div>
                <div>지금 바로 만나보세요 !</div>
            </Sub>
            <BuyBtn>
                <img src="/imgs/main_spot.svg" alt="buy" />
                위스키스팟 바로가기
            </BuyBtn>
        </Wrap>
    );
}

const Wrap = styled.div`
    position: relative;
    margin-top: 206px;
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: 700;

    span {
        background-image: linear-gradient(270deg, #ffd740 0%, #ffab00 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

const Sub = styled.div`
    color: #424242;
    font-size: 1.2rem;
    line-height: 33px;
    margin-top: 19px;
`;

const BuyBtn = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 18px 0;
    align-items: center;
    width: 18%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 80px;
    font-weight: 700;

    img {
        margin-right: 15px;
    }
`;
