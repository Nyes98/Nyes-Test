'use client';

import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

export default function SubpathComponent() {
    const pathname = usePathname();
    const params = useParams();
    return (
        <>
            <div> 암하위</div>
            <div>{pathname}</div>
            <div>{params.subpath}</div>
        </>
    );
}
