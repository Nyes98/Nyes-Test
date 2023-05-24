'use client';

import styles from './page.module.css';
import Link from 'next/link';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from './GlobalRedux/Features/counter/couterSlice';

export default function Home() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <Link href={'/crypto'}>
                <div>main</div>
            </Link>
            <button className={styles.button} onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button className={styles.button} onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>
                Increment by 2
            </button>
            <button className={styles.button} onClick={() => dispatch(incrementAsync(1))}>
                Async Increase
            </button>
            <div>{count}</div>
        </>
    );
}
