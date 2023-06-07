const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'expand omit beach parent arrange gesture orchard shield kitten crazy title ring';
const polygonScanApiKey = 'JH33QS87VK4UPQ9AGYQVEBXT38M7I1S8AJ';

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*',
        },
        polygon: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    'https://rpc-mumbai.maticvigil.com/v1/9beb210b2b57afb3181906caa85ccf5ba902d185'
                ),
            network_id: 80001,
        },
    },
    api_keys: {
        polygonscan: polygonScanApiKey,
    },
    compilers: {
        solc: {
            version: '0.8.9',
        },
    },
    plugins: ['truffle-plugin-verify'],
};
