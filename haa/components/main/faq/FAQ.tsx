'use client';
import { styled } from 'styled-components';
import Accordion from '../../accordion/Accordion';

export default function FAQSection() {
    return (
        <Wrap>
            <Title>
                WINENWIN
                <span> FAQ</span>
            </Title>
            <Sub>
                randomized words which don&apos;t look even slightly believable.
                <div>If you are going to use a passage of Lorem Ipsum</div>
            </Sub>
            <Accordion />
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 275px;
    position: relative;
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
    margin-top: 19px;
    color: #424242;
    font-size: 1.2rem;
    line-height: 33px;
`;
