const { ethers, upgrades } = require('hardhat')
async function deployUpgradeERC7579() {
    const ERC7579Implementation = 'ERC7579Implementation'
    const contractOwner: string = await ethers.getSigners().then((res:any) => res[0].address);
    console.log("Contract Owner",contractOwner);
    const msaImplementationAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
    try {
        const MyERC7579Implementation = await ethers.getContractFactory(ERC7579Implementation)
        const proxy = await upgrades.deployProxy(MyERC7579Implementation, [msaImplementationAddress],{ initializer: "initialize" });
        await proxy.waitForDeployment();

        console.log(`Deployement of ERC7579Implementation Address : ${proxy.target}`);
    } catch (error) {
        console.log("Eroor",error)
    }
}

async function main() {
    await deployUpgradeERC7579()
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})
