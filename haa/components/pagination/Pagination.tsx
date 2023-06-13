import { styled } from 'styled-components';

export default function Pagination() {
    const dummy = [1, 2, 3, 4, 5, 6, 7];

    return (
        <Wrap>
            <div>이전</div>
            {dummy.map((item, index) => (
                <PageDiv key={`page-${index}`}>{index + 1}</PageDiv>
            ))}
            <div>다음</div>
        </Wrap>
    );
}

const Wrap = styled.div`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    div {
        margin: 0 7px;
    }
`;

const PageDiv = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
