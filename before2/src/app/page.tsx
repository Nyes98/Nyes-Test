'use client';

import { decrement, increment } from '@/redux/features/counter/CounterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { Web3Button } from '@web3modal/react';
import { useAccount, useBalance } from 'wagmi';

export default function Home() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const { address, isConnecting, isDisconnected } = useAccount();
    const { data, isError, isLoading } = useBalance({
        address: address,
    });

    const dispatch = useAppDispatch();
    return (
        <>
            <div>테스트중이야</div>
            <div>
                <Link href={'/do'}>do</Link>
            </div>
            <div>
                <Link href={'/dodo'}>dodo</Link>
            </div>
            <div>
                <Link href={'/load'}>로드</Link>
            </div>
            <div>여기는 리덕스</div>
            <div onClick={() => dispatch(decrement())}>-</div>
            <div>{count}</div>
            <div onClick={() => dispatch(increment())}>+</div>
            <Web3Button />
            <div>{address}</div>

            <div>
                {data?.formatted} {data?.symbol}
            </div>
        </>
    );
}
