'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
    title: string;
    body: string;
};

export default function Load1() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div>
                <Skeleton width={'313px'} height={'313px'} borderRadius={'15px 15px 0 0'} />
            </div>
            <div>
                <Skeleton width={'313px'} height={'185px'} borderRadius={'0 0 15px 15px'} baseColor="#404040" />
            </div>
        </SkeletonTheme>
    );
}
