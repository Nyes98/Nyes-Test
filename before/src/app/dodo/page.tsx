'use client';

import DoDoComponent from './component';
import { Suspense, useEffect, useState } from 'react';

export default function Test1() {
    const [te, tes] = useState(1);
    const test = () => {
        tes((state) => state + 1);
    };
    useEffect(() => {}, []);
    return (
        <Suspense fallback={<p>로딩을 보여줘...</p>}>
            <DoDoComponent test={test} te={te}></DoDoComponent>
        </Suspense>
    );
}
