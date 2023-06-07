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
    return <Wrap>하위</Wrap>;
}

const Wrap = styled.div``;
