'use client';
import { styled } from 'styled-components';

import Image from 'next/image';
import Web3_BuyBtn from '@/images/buybtn.png';
import Web3_whiskey from '@/images/whiskey.png';
import Web3_NFT from '@/images/nft.png';
import Web3_Trade from '@/images/trade.png';
import Union from '@/images/Union.png';
import Union2 from '@/images/Union2.png';

export default function Web3Section() {
    return (
        <Wrap>
            <Title>
                WINENWIN
                <span> VALUE CHAIN</span>
            </Title>
            <Sub>
                <div>투자가치가 있는 실물 자산을 NFT화 함으로써 디지털 자산으로 전환하여, </div>
                <div>보관 부담을 없애면서도 간편한 거래 방식으로 인해 시장 유동성을 활성화시킵니다.</div>
            </Sub>
            <CardBox>
                <Image src={Web3_BuyBtn} width={126} alt="web3_buyBtn"></Image>
                <div>NFT 구매</div>
                <Arrow>
                    <Image src={Union} width={20} height={100} alt="union"></Image>
                </Arrow>
            </CardBox>
            <ValueBox>
                <div>
                    <div>
                        <Image src={Web3_whiskey} width={100} alt="web3_buyBtn"></Image>
                    </div>
                    <div>다양한 위스키</div>
                </div>
                <div>
                    <ArrowText>가치보장</ArrowText>
                    <div>
                        <Image src={Union2} width={260} alt="union2" className="rotate"></Image>
                    </div>
                    <div>
                        <Image src={Union2} width={260} alt="union2"></Image>
                    </div>
                    <ArrowText>유동성</ArrowText>
                </div>
                <div>
                    <div>
                        <Image src={Web3_NFT} width={105} alt="web3_NFT"></Image>
                    </div>
                    <div>WINENWIN NFT</div>
                </div>
                <div>
                    <ArrowText>수익</ArrowText>

                    <div>
                        <Image src={Union2} width={260} alt="union2" className="rotate"></Image>
                    </div>
                    <div>
                        <Image src={Union2} width={260} alt="union2"></Image>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <Image src={Web3_Trade} width={109} alt="web3_NFT"></Image>
                    </div>
                    <div>거래</div>
                </div>
            </ValueBox>
            <Text>
                <div>실물자산인 위스키의 안정적인 가치가 지탱되고 있기 때문에,</div>
                <div>커뮤니티의 신뢰 구축이 가능하며 팬덤과 콘텐츠의 확장성이 풍부합니다.</div>
            </Text>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 800px;
`;

const Title = styled.div`
    font-size: 4rem;
    padding: 20px 0;
    font-weight: 700;

    span {
        background-image: linear-gradient(270deg, #ffd740 0%, #ffab00 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

const Text = styled.div`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 42px;

    text-align: center;
    margin-top: 117px;
`;

const Sub = styled.div`
    color: #424242;
    font-size: 1.2rem;
    line-height: 33px;
`;

const CardBox = styled.div`
    padding: 80px 0;
    position: relative;
    text-align: center;
    font-weight: 700;
`;

const Arrow = styled.div`
    position: absolute;
    width: 200px;
    left: calc(50% - 216px / 2);
    top: 260px;
`;

const ValueBox = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    font-weight: 700;
    width: 90%;
    margin: 80px auto 0 auto;

    .rotate {
        transform: scaleX(-1);
    }
`;

const ArrowText = styled.div`
    font-weight: 500;
`;
