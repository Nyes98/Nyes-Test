'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function Providers({ children }: Props) {
    console.log('아이', children);
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;
