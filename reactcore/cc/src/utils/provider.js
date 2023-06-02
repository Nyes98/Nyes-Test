import { Web3Provider } from '@ethersproject/providers';

function getProvider() {
    const provider = new Web3Provider(window.ethereum);
    return provider;
}

export { getProvider };
