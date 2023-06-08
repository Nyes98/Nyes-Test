import { styled } from 'styled-components';

export default function Footer() {
    return (
        <Background>
            <Wrap>
                <LogoBox>
                    <img src="/imgs/wWLogo.svg" alt="logo" />
                </LogoBox>

                <InfoBox>
                    <Company>
                        <div>1670-1588</div>
                        <div>
                            <div>10:00~17:00 (주말/공휴일 제외)</div>
                            <div>13:00~14:00 (점심시간)</div>
                        </div>
                        <div>
                            <span>제휴 문의 </span>
                            admin@hnomics.net
                        </div>
                    </Company>
                    <Intro>
                        <div>
                            <div>WINEWIN은 웹 3.0 플랫폼을 통해 새로운 세상을 창조하려 합니다.</div>
                            <div>탈중앙화된 시스템과 개인화와 소유를 통하여 메타버스를 창조합니다.</div>
                        </div>
                        <div>우리의 계획에 여러분들의 꿈을 같이 싣어서 보내주세요.</div>
                        <div>우리는 언제나 여러분을 기다립니다.</div>
                    </Intro>
                </InfoBox>

                <InfoBox2>
                    <Address>
                        <div>
                            <div>
                                <span>(주)엡실론스튜디오</span>
                                <span>대표 문찬영</span>
                                <span>사업자등록번호 198-76-543098</span>
                            </div>
                            <div>사업장소재지 서울특별시 강남구 테헤란로 503, 하이브로빌딩 6층 606호</div>
                        </div>
                        <div>2023 WINEWIN. Copyright All rights reserved.</div>
                    </Address>
                    <Page>
                        <div>About</div>
                        <div>NFTs</div>
                        <div>Membership</div>
                        <div>FAQ</div>
                        <div>이용약관</div>
                        <div>개인정보취급방침</div>
                    </Page>
                </InfoBox2>
            </Wrap>
        </Background>
    );
}

const Background = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    background-color: black;
    margin-top: 270px;
`;

const Wrap = styled.div`
    width: 72%;
    padding: 80px 0;
    margin: auto;
`;

const LogoBox = styled.div``;

const InfoBox = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    margin-bottom: 100px;
`;

const InfoBox2 = styled.div`
    display: flex;
    color: #9e9e9e;
    justify-content: space-between;
`;

const Address = styled.div`
    line-height: 26px;
    & > div {
        margin: 13px 0;
    }
`;

const Page = styled.div`
    display: flex;
    div {
        margin: 0 13px;
    }
`;

const Company = styled.div`
    & > div {
        margin: 15px 0;
        line-height: 31px;
    }

    & > div:first-child {
        font-size: 1.6rem;
        font-weight: 700;
    }

    & > div:last-child {
        font-weight: 700;
    }

    span {
        color: #757575;
    }
`;
const Intro = styled.div`
    color: #e0e0e0;
    font-size: 1.2rem;
    line-height: 27px;

    & > div {
        margin: 15px 0;
    }
`;
