import { hashMessage, utils } from "ethers";
const { ethers, upgrades } = require("hardhat");

async function deployScript() {
  const ContractName = "MSAAdvanced";
  const [deployer] = await ethers.getSigners();

  const salt = ethers.encodeBytes32String("1");
  
  const MSAAdvancedFactory = await ethers.getContractFactory("MSAAdvanced");
  const msaAdvanced = await MSAAdvancedFactory.deploy({ salt });
  await msaAdvanced.waitForDeployment();
  console.log(`MSAAdvanced deployed at: ${msaAdvanced.target}`);

  const MSAFactoryFactory = await ethers.getContractFactory("MSAFactory");
  const msaFactory = await MSAFactoryFactory.deploy(msaAdvanced.target, { salt });
  await msaFactory.waitForDeployment();
  console.log(`MSAFactory deployed at: ${msaFactory.target}`);


  const BootstrapFactory = await ethers.getContractFactory("Bootstrap");
  const bootstrap = await BootstrapFactory.deploy({ salt });
  await bootstrap.waitForDeployment();
  console.log(`Bootstrap deployed at: ${bootstrap.target}`);



//   const Createactory = await ethers.getContractFactory("Create2Deployer");
//   const create2Deployer = await Createactory.deploy();

//   console.log("Create2Deployer deployed to:", create2Deployer.target);

//   console.log("Deploying contracts with the account:", create2Deployer);

//   const create2Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

//   const salt =
//     "0x1234567890123456789012345678901234567890123456789012345678901234";
//   const MSAAdvancedFactory = await ethers.getContractFactory(ContractName);

//   let tx = await create2Deployer.deploy(0, salt, MSAAdvancedFactory.bytecode);

//   //   // how to catch events
//   const receipt = await tx.wait();

//   //   // Read the events from the receipt
//   const msaAddress = await create2Deployer.getContractAddress();

//   console.log("MSAAdvanced Deployed Address:", msaAddress); //0xEE1E54953D90FE28DaF9bE2a029C3824AFe9A40C

//   const MSAFactory = await ethers.getContractFactory("MSAFactory");
//   let tx2 = await create2Deployer.deploy(0, salt, MSAFactory.bytecode);
//   const receipt2 = await tx.wait();
//   const msaFactoryAddress = await create2Deployer.getContractAddress();

//   console.log("MSAFactory Deployed Address:", msaFactoryAddress); //
}

async function main() {
  await deployScript();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
