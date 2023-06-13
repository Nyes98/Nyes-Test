import React, { useState } from 'react';
import { AccordionDummy } from '../../data/accordion';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import ArrowImg from '@/images/arrow_up.svg';

export default function Accordion() {
    const [openIdx, setOpenIdx] = useState(-1);

    const handleItemClick = (index: number) => {
        if (openIdx === index) {
            setOpenIdx(-1);
        } else {
            setOpenIdx(index);
        }
    };

    return (
        <Wrap>
            {AccordionDummy.map((item, index) => (
                <CardWrap
                    key={`acco-${index}`}
                    onClick={() => {
                        handleItemClick(index);
                    }}
                >
                    <Card className={openIdx === index ? 'open' : ''}>
                        <Title>
                            {item.title}
                            <Image src={ArrowImg} alt=""></Image>
                        </Title>
                        <Hidden className={openIdx === index ? 'open' : ''}>
                            {Array.isArray(item.text) ? (
                                item.text.map((item: any, index: number) => (
                                    <TextWrap key={`wrap=${index}`}>
                                        <TextTitle>
                                            {index + 1}) {item.title}
                                        </TextTitle>
                                        <div>{item.description}</div>
                                    </TextWrap>
                                ))
                            ) : (
                                <>{item.text}</>
                            )}
                        </Hidden>
                    </Card>
                </CardWrap>
            ))}
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 79px;
`;

const TextTitle = styled.div`
    font-weight: 700;
`;
const TextWrap = styled.div`
    margin-bottom: 15px;
`;

const sildeDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }

`;

const Hidden = styled.div`
    display: none;
    margin-bottom: 19px;

    &.open {
        display: block;
        margin-top: 30px;
        animation: ${sildeDown} 0.3s ease-in-out;
    }
`;

const CardWrap = styled.div`
    width: 48%;
    margin: 20px 0;
    cursor: pointer;
`;

const Card = styled.div`
    width: 100%;
    padding: 30px 50px;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    img {
        transform: rotate(180deg);
    }

    &.open {
        img {
            transform: rotate(0deg);
        }
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 1.4rem;
`;
