'use client';
import { styled } from 'styled-components';

export default function RealAssetSection() {
    return (
        <Wrap>
            <Title>
                THE REAL ASSET
                <span> + NFT</span>
            </Title>
            <Sub>
                <div>WINENWIN의 차별화 방안 </div>
                <div>Whiskey ( 현물자산 + 팬덤 + 콘텐츠 ) + NFT</div>
            </Sub>
            <ImgBox>
                <div>
                    <img src="imgs/realset_card.svg" alt="realSet" />
                </div>
                <div>실물자산인 위스키의 안정적인 가치가 지탱되고 있기 때문에,</div>
                <div>커뮤니티의 신뢰 구축이 가능하며 팬덤과 콘텐츠의 확장성이 풍부합니다.</div>
            </ImgBox>
        </Wrap>
    );
}

const Wrap = styled.div`
    padding: 100px 0;
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

const ImgBox = styled.div`
    img {
        padding: 70px 0;
    }

    div {
        display: flex;
        justify-content: center;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 42px;
    }
`;
