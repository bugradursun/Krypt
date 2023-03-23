require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

//const url1 = process.env.ALCHEMY_END_POINT;
//console.log(typeof url1);

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.QUICKNODE_HTTP,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
