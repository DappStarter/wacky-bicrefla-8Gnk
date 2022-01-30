require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stomach cruise miss erosion grid glide equal genius'; 
let testAccounts = [
"0xd19c858dda78b0769c5e8c3dadd0b2505c82fdeaa194e4d8c7e7544e1f70f2c4",
"0xbeca8b085eb5841b1c8471477253f4fa20306ce8bd5452e18d053806836b3b9f",
"0x32ab4a560ae6518ffc9d37a3f8a44625fb6f34a27beea9eeb91f268810558394",
"0x2a06c3dbe853cff7088068a6f4ca1eb283fe7eb0ac71b6f2ffd1fbf63c2522d5",
"0x4f6ef4bf992ff988943fce1de6a209fcacea4438502ec86c399de213ba86ed65",
"0x8f300c830e30b4bec9c8dd49b56fe8b2a333d57dff38fd4b342ffb0f9571ce72",
"0xd202359ca80713de4f9d27fc2693bdb1dfb18d04440fe26cef9f18e3943c10ea",
"0x80524c94ae47076c88348a79252cd19305d6a373ad78bfe97ca129c0a49e7d84",
"0xd930ff5c25949c7fb64f05088be3f42aa556098052553a7b753a208e680b8307",
"0xd61ebbc148aa0d3cf64c1a3a2db38b5b2c004b4b02336dc8b6893df01d6e5dd1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

