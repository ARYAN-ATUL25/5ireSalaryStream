/** @type import('hardhat/config').HardhatUserConfig */

const { FIRE_RPC_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "firechain",
    networks: {
      hardhat: {},
      fantom: {
        url: FIRE_RPC_URL,
        chainId: 997,
        gasPrice: 1000000000,
        accounts: [`0x${PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
