'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DoComponent() {
    const router = useRouter();

    return (
        <>
            <div>테스트에여</div>
            <Link href={'/do/hey'}>
                <div>하위로이동</div>
            </Link>

            <button onClick={() => router.push('/do/hoho')}>암유즈라우탈</button>
            <button onClick={() => router.refresh()}>암유즈라우탈 리프래시</button>
            <button onClick={() => router.back()}>암유즈라우탈 BACK</button>
            <button onClick={() => router.forward()}>암유즈라우탈 FORWARD</button>
        </>
    );
}
