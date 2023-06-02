'use client';

import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { Providers } from '@/redux/provider';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';

const chains = [polygon, polygonMumbai];
const projectId = 'bb6d5b88cd3fb92a8f16eb964ba6ff86';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Providers>
                    <WagmiConfig config={wagmiConfig}>
                        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                    </WagmiConfig>
                </Providers>
                <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            </body>
        </html>
    );
}
