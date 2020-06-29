import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");

const key = ec.genKeyPair();
const publickKey = key.getPublic("hex");
const privatekKey = key.getPrivate("hex");


export const []