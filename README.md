# Blockchain

A blockchain is a type of Digital Ledger Technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography.

### Process flow

- Add transactions

- Write to the blockchain

- The chain has been created, and clear the transactions that have been listed on the chain.

![Create a Blockchain](./Blockchain.png)

## Demo Link

https://capricorncd.github.io/demos/blockchain/

![Blockchain QR code](./qr.png)

## Example

```ts
interface Block {
  // `hash value of the previous block` + `current transactions string`
  // SHA256(blocks[index - 1].hash + JSON.stringify(transitions))
  hash: string;
  // An array of transaction IDs
  transitions: string[];
}

// An array of blockchain 
const blocks: Block[] = []

// Genesis Block
// see https://en.bitcoin.it/wiki/Genesis_block
// A genesis block is the first block of a block chain. 
// Modern versions of Bitcoin number it as block 0, though very early versions counted it as block 1. 
// The genesis block is almost always hardcoded into the software of the applications that utilize its block chain. 
// It is a special case in that it does not reference a previous block, and for Bitcoin and almost all of its derivatives, it produces an unspendable subsidy.
blocks.push({
  hash: '',
  transitions: [],
})
```

## Wiki

https://en.wikipedia.org/wiki/Blockchain