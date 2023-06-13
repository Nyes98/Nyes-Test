import Image from 'next/image';
import { styled } from 'styled-components';

import MaticImg from '@/images/MATIC.png';
import Link from 'next/link';

export default function NftList() {
    return (
        <Wrap>
            <Link href={'/NFTs/buy/1'}>
                <ImgBox></ImgBox>
                <InfoBox>
                    <div>#20</div>
                    <div>Whiskey Name</div>
                    <div>
                        <Image src={MaticImg} width={19} alt="matic"></Image>
                        550 MATIC
                    </div>
                </InfoBox>
            </Link>
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
        align-items: center;
    }

    div:nth-child(2) {
        font-size: 1.2rem;
    }

    img {
        margin-right: 10px;
    }
`;
