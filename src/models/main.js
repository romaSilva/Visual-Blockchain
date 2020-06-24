const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "ad460418bc7fd278e3310b4f6a9a7b6686b3d6a70af12cce17d73e94c7ba5645"
);
const myWalletAdress = myKey.getPublic("hex");

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAdress, "public key", 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log("starting the mining...");
myCoin.minePendingTransactions(myWalletAdress);
myCoin.minePendingTransactions(myWalletAdress);

console.log(`Miners balance is ${myCoin.getBalanceofAddress(myWalletAdress)}`);
