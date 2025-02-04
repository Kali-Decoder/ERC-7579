const { ethers } = require("hardhat");
async function main() {
  
    const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

    // Get signer (optional but recommended)
    const [signer] = await ethers.getSigners();


    const contract = await ethers.getContractAt("ERC7579Implementation", CONTRACT_ADDRESS, signer);

     // ✅ Call nonce()
    try {
        console.log(contract.interface.fragments.map(f => f.name));
        // call nonce method 

        


        // console.log("Current nonce:", nonce.toString());
    } catch (error) {
        console.error("Error calling nonce:", error);
    }

    // Get nonce
    // const nonce = await contract.nonce();
    // console.log("Current nonce:", nonce.toString());

    // // Define transaction data (Example: calling a function on the same contract)
    // const functionData = contract.interface.encodeFunctionData("someFunction", [/* args here */]); // Replace with actual function call data

    // // Generate transaction hash
    // const txHash = ethers.solidityPackedKeccak256(
    //     ["address", "uint256", "bytes", "uint256"],
    //     [CONTRACT_ADDRESS, nonce, functionData, await provider.getNetwork().then(n => n.chainId)]
    // );

    // // Sign transaction hash
    // const signature = await wallet.signMessage(ethers.getBytes(txHash));

    // // Call executeTransaction
    // const tx = await contract.executeTransaction(functionData, signature);
    // console.log("Transaction sent, waiting for confirmation...");

    // // Wait for transaction confirmation
    // await tx.wait();
    // console.log("Transaction confirmed:", tx.hash);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
