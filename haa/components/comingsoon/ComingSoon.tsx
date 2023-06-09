'use client';

import React from 'react';
import { styled } from 'styled-components';

export default function ComingSoon() {
    return (
        <Wrap>
            <img src="/imgs/coming.png" alt="soon" />
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 300px;
    text-align: center;
    img {
        width: 25%;
    }
`;
