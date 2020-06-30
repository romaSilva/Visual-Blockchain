import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");
const ec2 = new EC("secp256k1");
const ec3 = new EC("secp256k1");

const key = ec.genKeyPair();
const publicKey = key.getPublic("hex");
const privateKey = key.getPrivate("hex");
const key2 = ec2.genKeyPair();
const publicKey2 = key2.getPublic("hex");
const privateKey2 = key2.getPrivate("hex");
const key3 = ec3.genKeyPair();
const publicKey3 = key3.getPublic("hex");
const privateKey3 = key3.getPrivate("hex");

export default [
  { nickname: "Jonas", key, publicKey, privateKey },
  {
    nickname: "Martha",
    key: key2,
    publicKey: publicKey2,
    privateKey: privateKey2,
  },
  {
    nickname: "Mikkel",
    key: key3,
    publicKey: publicKey3,
    privateKey: privateKey3,
  },
];
