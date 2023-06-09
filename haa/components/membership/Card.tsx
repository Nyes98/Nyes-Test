import { styled } from 'styled-components';

export default function MembershipCard() {
    return (
        <Wrap>
            <CardWrap>
                <Card>
                    <Title>
                        멤버십 <span>골드 </span>등급
                    </Title>
                    <img src="/imgs/realset_card.svg" alt="gold" />
                    <Text>
                        <div>가격: 75$ (10만원)</div>
                        <div>소유 하나당 위스키 구매 시 0.5% 할인</div>
                        <div>(최대 소유 10개 가능으로 최대 5%할인 적용 가능)</div>
                    </Text>
                </Card>
                <Card>
                    <Title>넥스트 에디션</Title>
                    <img src="/imgs/nextkey.png" alt="dia" />
                    <Text>
                        <div>Comming Soon!</div>
                    </Text>
                </Card>
            </CardWrap>
            <StarWrap>
                <Star>
                    <img src="/imgs/discount.svg" alt="discount" />
                    <Title>할인 혜택</Title>
                    <Text>
                        <div>위스키 구매 시</div>
                        <div>할인 혜택 적용</div>
                    </Text>
                </Star>
                <Star>
                    <img src="/imgs/star.svg" alt="star" />
                    <Title>우선 구매 혜택</Title>
                    <Text>
                        <div>고급 위스키 입고 시,</div>
                        <div>Genesis 홀더들에게</div>
                        <div>우선 공개 및 구매 혜택</div>
                    </Text>
                </Star>
                <Star>
                    <img src="/imgs/sale.svg" alt="sale" />
                    <Title>합리적인 가격</Title>
                    <Text>
                        <div>WINENWINE만의 제휴 업체들을 통해</div>
                        <div>합리적인 희귀 및 위스키 선구매 가능</div>
                        <div>(우선권 부여)</div>
                    </Text>
                </Star>
            </StarWrap>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 158px;
`;
const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StarWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 79px;
`;

const Star = styled.div`
    width: 32%;
    padding: 50px 0;
    text-align: center;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const Card = styled.div`
    padding: 50px 0;

    text-align: center;
    width: 48%;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    line-height: 42px;

    img {
        height: 196px;
        margin-top: 19px;
    }
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    padding: 15px 0;
    span {
        background-image: linear-gradient(270deg, #ffd740 0%, #ffab00 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

const Text = styled.div`
    color: #424242;
`;
