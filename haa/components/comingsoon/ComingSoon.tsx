'use client';

import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
import SoonImg from '../../public/imgs/coming.png';

export default function ComingSoon() {
    return (
        <Wrap>
            <Image src={SoonImg} width={300} alt="soon"></Image>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 300px;
    text-align: center;
`;
