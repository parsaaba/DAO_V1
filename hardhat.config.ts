import "@typechain/hardhat"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import "dotenv/config"
import "solidity-coverage"
import "hardhat-deploy"
import "solidity-coverage"
import { HardhatUserConfig } from "hardhat/config"


const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL || "https://rinkeby.infura.io/v3/54c9d0915d4f4beda78f184e994da9c4"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "921e37fc86c4fe86ecb195def14d38f0da66e2995ed352d30b4ebed802bd0f42"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "AIU2F873DCR2712JUCBPMK91IY9TF2I9J6"

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/54c9d0915d4f4beda78f184e994da9c4",
      accounts: [PRIVATE_KEY],
      chainId: 4,
      
    },
  },
  solidity: "0.8.9",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  mocha: {
    timeout: 250000, // 200 seconds max for running tests
  },
}

export default config
