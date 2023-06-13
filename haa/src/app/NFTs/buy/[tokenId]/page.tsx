'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

import NFTImg from '@/images/nft_bg.svg';
import MaticImg from '@/images/MATIC.png';
import { NFTDummy } from '../../../../../data/nft';

export default function NFTBuy() {
    const data = NFTDummy[0];
    return (
        <Wrap>
            <ImgBox>
                <Image src={NFTImg} width={547} alt="nft"></Image>
            </ImgBox>
            <ContentsBox>
                <TiTleBox>{data.name}</TiTleBox>
                <InfoBox>
                    {data.sailInfo.map((item, index) => (
                        <InfoLine key={`saleInfo-${index}`}>
                            <Title>{item.title}</Title>
                            <Contents>
                                {item.value}
                                {item.unit}
                            </Contents>
                        </InfoLine>
                    ))}
                </InfoBox>
                <TokenIdBox>
                    <div>
                        <div>Token Id</div>
                        <div>{data.tokenId}</div>
                    </div>
                    <div>
                        <div>Contract Address</div>
                        <div>{data.CA.slice(0, 20) + '...'} </div>
                    </div>
                </TokenIdBox>
                <OwnerBox>
                    <div>
                        <div>소유자</div>
                        <div>판매 가격(개당)</div>
                        <div>판매개수</div>
                    </div>
                    <div>
                        <div>{data.owner.slice(0, 12) + '.'}</div>
                        <div>
                            <Image src={MaticImg} width={19} alt="matic"></Image>
                            {data.price} MATIC
                        </div>
                        <div>{data.amount}개</div>
                    </div>
                    <div>
                        <div></div>
                        <div>120$</div>
                        <div></div>
                    </div>
                </OwnerBox>
                <BuyBtn></BuyBtn>
            </ContentsBox>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 50px;
    display: flex;
`;

const ImgBox = styled.div`
    margin-right: 38px;
`;
const ContentsBox = styled.div`
    width: 70%;
`;
const TiTleBox = styled.div`
    font-size: 1.5rem;
`;

const InfoLine = styled.div`
    display: flex;
    margin-top: 16px;

    width: 45%;
`;

const Title = styled.div`
    color: #212121;

    width: 35%;
`;
const Contents = styled.div`
    font-weight: 500;
    text-decoration-line: underline;
`;
const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 42px;
`;
const TokenIdBox = styled.div`
    border: 1px solid #eeeeee;
    border-radius: 5px;
    margin-top: 48px;
    display: flex;

    justify-content: space-between;
    & > div {
        display: flex;
        padding: 36px 23px;

        & > div:first-child {
            margin-right: 23px;
        }

        & > div:last-child {
            color: blue;
        }
    }
`;
const OwnerBox = styled.div`
    border: 1px solid #eeeeee;
    border-radius: 5px;
    padding: 30px 40px;
    margin-top: 30px;

    & > div:first-child {
        margin-bottom: 30px;
    }

    & > div:nth-child(2) {
        font-size: 1.2rem;
        font-weight: 500;
    }

    & > div {
        display: flex;

        & > div {
            width: 33%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                margin-right: 10px;
            }
        }
    }
`;
const BuyBtn = styled.div``;
