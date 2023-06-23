const { ethers } = require('ethers');

const provider = new ethers.providers.WebSocketProvider("ws://ws.zkevm-rpc.com:8546");

provider.getBlockNumber().then(console.log);
