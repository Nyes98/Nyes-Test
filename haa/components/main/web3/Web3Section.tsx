'use client';
import { styled } from 'styled-components';
import Web3Card from './Web3Card';

export default function Web3Section() {
    const dummy = [1, 2, 3, 4, 5, 6];
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
                <img src="/imgs/buybtn.png" alt="buybtn" />
                <div>NFT 구매</div>
                <Arrow>
                    <img src="/imgs/Union.png" alt="union" />
                </Arrow>
            </CardBox>
            <ValueBox>
                <div>
                    <div>
                        <img src="/imgs/whiskey.png" alt="whiskey" />
                    </div>
                    <div>다양한 위스키</div>
                </div>
                <div>
                    <div>
                        <img src="/imgs/Union2.png" alt="union2" />
                    </div>
                    <div>
                        <img src="/imgs/Union2.png" alt="union2" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/imgs/nft.png" alt="nft" />
                    </div>
                    <div>WINENWIN NFT</div>
                </div>
                <div>
                    <div>
                        <img src="/imgs/Union2.png" alt="union2" />
                    </div>
                    <div>
                        <img src="/imgs/Union2.png" alt="union2" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/imgs/trade.png" alt="trade" />
                    </div>
                    <div>거래</div>
                </div>
            </ValueBox>
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

const Sub = styled.div`
    color: #424242;
    font-size: 1.2rem;
    line-height: 33px;
`;

const CardBox = styled.div`
    padding: 80px 0;
    position: relative;
    text-align: center;

    img {
        width: 9%;
    }
`;

const Arrow = styled.div`
    position: absolute;
    width: 160px;
    left: calc(50% - 172px / 2);
    top: 260px;
`;

const ValueBox = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    img {
        width: 70%;
    }
`;
