# ERC7579 Contract Deployment Guide

## Overview
This project includes the deployment of three main contracts:
1. **AdvancedMSA Contract** (deployed using `CREATE2` or salt method)
2. **ERC7579Factory Contract** (requires the AdvancedMSA contract address as a parameter)
3. **BootstrapFactory Contract** (deployed after ERC7579Factory)

4. **Upgradable ERC7579Implementation Contract (Including all Timestamp , Upgradable and Signature Validating Feature)** (Deployed by customerc7579 script by passing MSAAdvanced Contract Address)

This guide will walk you through the deployment process and how to interact with the contracts.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.org/)

## Installation
Clone the repository and install dependencies:
```sh
git clone <repo-url>
cd <repo-folder>
pnpm install
```

## Deployment Steps
### 1️⃣ Deploy AdvancedMSA Contract
Deploy `AdvancedMSA` using `CREATE2` or salt method.

### 2️⃣ Deploy ERC7579Factory Contract
Deploy `ERC7579Factory` by passing the `AdvancedMSA` contract address as a constructor parameter.

### 3️⃣ Deploy BootstrapFactory Contract
Finally, deploy the `BootstrapFactory` contract.

### Run Deployment Script
You can deploy all the contracts using the Hardhat script:
```sh
npx hardhat run scripts/deploy.script.ts --network hardhat
```

### Run Deployment ERC7579 Implementation Script
You can deploy all the contracts using the Hardhat script:
```sh
npx hardhat run scripts/deploy.customerc7579.ts --network hardhat
```


## Interacting with the Contracts
Once deployed, you can interact with the contracts using Hardhat console:
```sh
npx hardhat console --network hardhat
```
Example:
```js
const contract = await ethers.getContractAt("ERC7579Implementation", "<deployed_address>");
const nonce = await contract.nonce();
console.log("Current nonce:", nonce.toString());
```

## Troubleshooting
### Common Issues & Fixes
- **ABI Mismatch**: Ensure the ABI in `artifacts/` matches the deployed contract.
- **Incorrect Address**: Double-check that you're using the correct contract address.
- **Nonce Function Not Found**: Verify that the `nonce()` function exists and is public.