import WalletConnectProvider from '@walletconnect/ethereum-provider';
import { IWCEthRpcConnectionOptions } from '@walletconnect/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { ConnectorUpdate } from '@web3-react/types';
export declare const URI_AVAILABLE = 'URI_AVAILABLE';
export interface WalletConnectConnectorArguments extends IWCEthRpcConnectionOptions {
    supportedChainIds?: number[];
}
export declare class UserRejectedRequestError extends Error {
    constructor();
}
export declare class WalletConnectConnector extends AbstractConnector {
    walletConnectProvider?: WalletConnectProvider;
    private readonly config;
    constructor(config: WalletConnectConnectorArguments);
    private handleChainChanged;
    private handleAccountsChanged;
    private handleDisconnect;
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null | string>;
    deactivate(): void;
    close(): Promise<void>;
}

const walletconnect = new WalletConnectConnector({
    rpc: { 1: 'https://rpc.ankr.com/eth' },
    infuraId: projectData.projectInfura,
    pollingInterval: 15000,
});

await walletconnect.activate(walletconnect, undefined, true).catch((err) => {
    console.log(err);
    walletconnect.walletConnectProvider = undefined;
});
