import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterBox>
            <SNSBox>
                <div>인스타그램</div>
                <div>페이스북</div>
            </SNSBox>
            <InfoBox>
                <Title>카카오톡</Title>
                <div>@윈윈</div>
            </InfoBox>{' '}
            <InfoBox>
                <Title>전화</Title>
                <div>서울 강남구 도산대로 427, 지하1층</div>
            </InfoBox>{' '}
            <InfoBox>
                <Title>영업시간</Title>
                <div>평일 10:00~18:30</div>
            </InfoBox>{' '}
            <InfoBox>
                <Title>이메일</Title>
                <div>winwin@winwin.com</div>
            </InfoBox>
            <SNSBox>
                <div>이용약관</div>
                <div>개인정보처리방침</div>
                <div>1:1 문의하기</div>
                <div>자주 묻는 질문</div>
            </SNSBox>
            <InfoBox>
                <Title>상호</Title>
                <div>앱실론 스튜디오 주식회사</div>
            </InfoBox>{' '}
            <InfoBox>
                <Title>주소</Title>
                <div>서울 강남구 도산대로 427, 지하1층</div>
            </InfoBox>{' '}
            <InfoBox>
                <Title>사업자등록번호</Title>
                <div>321-74-00750</div>
            </InfoBox>{' '}
            <InfoBox>
                <Title>대표</Title>
                <div>문찬영</div>
                <Title>개인정보관리책임자</Title>
                <div>최예찬</div>
            </InfoBox>{' '}
        </FooterBox>
    );
};

export default Footer;

const FooterBox = styled.div`
    padding: 19px;
    font-weight: 600;
    font-size: 0.5rem;
    border-top: 1px solid lightgray;
    margin-top: 30px;
`;

const SNSBox = styled.div`
    display: flex;
    margin-bottom: 15px;
    div {
        margin-right: 5px;
    }
`;

const InfoBox = styled.div`
    margin: 3px 0;
    display: flex;

    div {
        margin-right: 8px;
    }
`;
const Title = styled.div`
    color: gray;
`;
