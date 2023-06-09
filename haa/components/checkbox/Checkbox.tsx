'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function CheckBox() {
    const [ischeck, setIscheck] = useState(false);

    const Checking = () => {
        setIscheck((state) => !state);
        console.log(ischeck);
    };

    return (
        <Wrap onClick={Checking} className={ischeck ? 'checked' : ''}>
            <img src="/imgs/check.svg" alt="check" />
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
    cursor: pointer;

    &.checked {
        background-color: black;

        img {
            filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);
        }
    }
`;
