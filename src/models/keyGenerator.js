const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const key = ec.genKeyPair();
const publickKey = key.getPublic("hex");
const privatekKey = key.getPrivate("hex");

console.log("Private key: ", privatekKey);
console.log("Public key: ", publickKey);
