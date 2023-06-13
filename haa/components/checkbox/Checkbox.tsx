'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import CheckImg from '@/images/check.svg';

type Props = {
    select: boolean;
};

export default function CheckBox({ select }: Props) {
    return (
        <Wrap className={select ? 'checked' : ''}>
            <Image src={CheckImg} alt="check"></Image>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    text-align: center;
    margin-right: 15px;

    &.checked {
        background-color: black;

        img {
            filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);
        }
    }
`;
