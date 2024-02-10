import { ethers } from "hardhat";

async function main(): Promise<void> {
  const ProfileNFT = await ethers.getContractFactory("ProfileNFT");
  const profileNFTInstance = await ProfileNFT.deploy();
  await profileNFTInstance.deployed(); // Ensure the contract is deployed

  console.log("Contract Deployed to Address:", profileNFTInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
