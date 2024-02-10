import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
//import "@nomicfoundation/hardhat-waffle";
import 'dotenv/config';

const { API_URL, PRIVATE_KEY } = process.env;

const hardhatConfig: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY ? `0x${PRIVATE_KEY}` : ''],
    },
  },
};

export default hardhatConfig;
