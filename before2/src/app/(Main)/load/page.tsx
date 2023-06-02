'use client';

import Load1 from '@/components/skeleton/Load1';
import { useState } from 'react';
import { styled } from 'styled-components';

export default function Load() {
    const [so, setso] = useState(0);

    setTimeout(() => {
        setso(1);
    }, 3000);

    return (
        <>
            {so ? (
                <div>
                    <h1>{so}</h1>
                    <img src="/imgs/tete.jpg" alt="te" />
                    <div>암컨텐트</div>
                </div>
            ) : (
                <Load1 />
            )}
        </>
    );
}

const Wrap = styled.div`
    width: 313px;
    height: 498px;
`;
const ImgBox = styled.div`
    background-color: blue;
    height: 60%;

    img {
        width: 100%;
    }
`;
const ContentBox = styled.div`
    background-color: red;

    height: 40%;
`;
