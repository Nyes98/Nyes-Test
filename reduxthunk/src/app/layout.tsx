import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './GlobalRedux/provider';
import { Web3ReactProvider } from '@web3-react/core';

import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers';

const inter = Inter({ subsets: ['latin'] });

const getLibrary = (provider: any) => {
    return new Web3Provider(provider);
};

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
