'use client';

import { styled } from 'styled-components';
import { MileStoneData } from '../../../data/milestone';

interface TitleProps {
    even: number;
}

export default function MileStoneSection() {
    return (
        <Wrap>
            <Title>
                WINENWIN
                <span> ROADMAP</span>
            </Title>
            <Sub>
                <div>randomised words which don't look even slightly believable.</div>
                <div>If you are going to use a passage of Lorem Ipsum</div>
            </Sub>
            <LoadMap>
                {MileStoneData.map((item, index) => (
                    <MTitle key={`mt-${index}`} even={index % 2}>
                        {index % 2 === 0 ? (
                            <FlexBox>
                                <div>{item.title}</div>
                                <div>
                                    <img src="imgs/milestone.svg" alt="milestone" />
                                </div>
                                <div></div>
                            </FlexBox>
                        ) : (
                            <FlexBox>
                                <div></div>
                                <div>
                                    <img src="imgs/milestone.svg" alt="milestone" />
                                </div>
                                <div>{item.title}</div>
                            </FlexBox>
                        )}
                        {index % 2 === 0 ? (
                            <FlexBox>
                                <ContentsWrap>
                                    {item.list.map((item, index) => (
                                        <MContents key={`contents-${index}`}>{item}</MContents>
                                    ))}
                                </ContentsWrap>
                                <div></div>
                                <div></div>
                            </FlexBox>
                        ) : (
                            <FlexBox>
                                <div></div>
                                <div></div>
                                <ContentsWrap>
                                    {item.list.map((item, index) => (
                                        <MContents key={`mcontents-${index}`}>{item}</MContents>
                                    ))}
                                </ContentsWrap>
                            </FlexBox>
                        )}
                    </MTitle>
                ))}
            </LoadMap>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 237px;
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
    margin-top: 20px;
`;

const MTitle = styled.div<TitleProps>`
    justify-content: center;
    font-size: 1.6rem;
    margin-top: 50px;
    text-align: ${(props) => (props.even == 0 ? 'right' : 'left')};
`;

const MContents = styled.div`
    font-size: 1.2rem;
    margin-bottom: 20px;
`;

const LoadMap = styled.div`
    margin-top: 121px;
    font-weight: 700;
`;

const FlexBox = styled.div`
    display: flex;

    & > div:first-child {
        width: 47%;
    }

    & > div:nth-child(2) {
        width: 6%;
        text-align: center;
    }
`;

const ContentsWrap = styled.div``;
