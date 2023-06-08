'use client';
import { styled } from 'styled-components';

export default function MembershipSection() {
    return (
        <Wrap>
            <Title>
                WINENWIN
                <span> MEMBERSHIP</span>
            </Title>
            <Sub>
                <div>윈윈의 멤버십 혜택이 궁금하시다면</div>
                <div>지금 바로 윈윈 제네시스 홀더가 되보세요!</div>
            </Sub>
            <BuyBtn>
                <img src="/imgs/main_membership.svg" alt="membership" />
                멤버십 가입하기
            </BuyBtn>
            <ImgBox>
                <div>
                    <img src="imgs/membership.gif" alt="realSet" />
                </div>
                <div>WINENWIN Genesis Holder는 저희가 제작한 고급진 멤버십 카드를 받을 수 있습니다.</div>
                <div>멤버십 카드를 발급 받으신 분은 저희의 홀더로서 특별한 베네핏이 제공됩니다.</div>
            </ImgBox>
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

const ImgBox = styled.div`
    div {
        display: flex;
        justify-content: center;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 42px;
    }

    img {
        width: 40%;
    }
`;

const BuyBtn = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 18px 0;
    align-items: center;
    width: 17%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 80px;
    font-weight: 700;

    img {
        margin-right: 15px;
    }
`;
