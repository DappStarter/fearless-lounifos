require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember mistake install infant flower taxi'; 
let testAccounts = [
"0xf95009709acd41a2c1bdaf6f78097077e24ca1b7431bd7445a97874a99a9805c",
"0x6e30489b8d426706304cf5e2a9b70a941ccea98af825105284fa94cce5ac4f5a",
"0xf05300d90a815d57340cf2a4f591ba7d32f226dccc1764126b6c214a0738b336",
"0x0d7fc78813f4c0feffad22226e8783586d29c336dff138d5e581ec35863d1fc1",
"0xab095c607ad76d0a4ba023063c4164c2e1fd8a752ec57ba3bb85fe36bcb63a36",
"0x5007d12f5ea96200891a07cdd638a6a341161412fc9885254d16bd417f49bb7b",
"0xf629da76b4eea2d9242a4fa74367439dd95c6e9e0f4c48e315dc5609fa23b3e5",
"0xc61e86833fb5e666f7627dae16ccce132379dda54fcbe20d911741d16f2c4625",
"0xaab7ce2dcd951367fcf7dd3b3a6cf7eb0999e89b64b040da4c50bb5716fed44b",
"0x0f60ceb623d86d14ee54f5854fea1592622b4d862d4dc52f8d287e6399445c1d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
