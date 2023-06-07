'use client';
import { styled, keyframes } from 'styled-components';

export default function MainIntro() {
    return (
        <Wrap>
            <TextBox>
                <Title>The Real Asset + NFT</Title>
                <Contents>
                    WINENWIN은 가치가 있다고 판단되는 실물 자산에 NFT 기술을 입혀 새로운 디지털 자산의 기준을 도입하고자
                    합니다. <br />
                    ‘디지털 자산화’를 위한 첫 발걸음으로, 위스키 시장과 NFT의 접목으로 시작합니다. 
                </Contents>
            </TextBox>
            <IconBox>
                <img src="/imgs/main_Icon.svg" alt="icon" />
            </IconBox>
        </Wrap>
    );
}
const circleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 200px;
`;

const TextBox = styled.div`
    width: 45%;
    font-weight: 700;
`;
const Title = styled.div`
    background-image: linear-gradient(270deg, #ffd740 0%, #ffab00 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    font-size: 2.6rem;
`;
const Contents = styled.div`
    font-size: 1.9rem;
    margin-top: 42px;
`;
const IconBox = styled.div`
    animation: ${circleAnimation} 4s ease-in-out infinite;
`;
