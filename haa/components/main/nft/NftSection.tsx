'use client';
import { styled, keyframes } from 'styled-components';
import MainCarousel from '../../carousel/MainCarousel';
import Image from 'next/image';
import NFT_BuyBtn from '@/images/buybtn.png';

export default function MainNftSection() {
    return (
        <Wrap>
            <Title>
                WINENWIN
                <span> NFT</span>
            </Title>
            <Sub>마시지만 말고 투자해보세요! WINENWIN NFT와 함께! </Sub>
            <BuyBtn>
                <Image src={NFT_BuyBtn} width={52} alt="nft_buybtn"></Image>
                NFT 구매하기
            </BuyBtn>
            <MainCarousel />
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 348px;
    position: relative;
`;

const Title = styled.div`
    font-size: 4rem;
    padding: 10px 0;
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
`;

const BuyBtn = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 18px;
    align-items: center;
    width: 16%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 80px;
    font-weight: 700;

    img {
        margin-right: 15px;
    }
`;
