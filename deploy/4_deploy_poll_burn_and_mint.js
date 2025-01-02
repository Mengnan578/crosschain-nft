const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { firstAccount } = await getNamedAccounts();

  log("Deploying NFTPoolBurnAndMint contract...");

  const ccipSimulatorDeployment = await deployments.get("CCIPLocalSimulator");
  const CCIPSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorDeployment.address);
  const ccipSimulatorConfig = await CCIPSimulator.configuration();
  const destinationRouter = ccipSimulatorConfig.destinationRouter_;
  const linkTokenAddr = ccipSimulatorConfig.linkToken_;
  const wnftDeployment = await deployments.get("WrappedMyToken");
  const wnftAddress = wnftDeployment.address;

  await deploy("NFTPoolBurnAndMint", {
    contract: "NFTPoolBurnAndMint",
    from: firstAccount,
    log: true,
    args: [destinationRouter, linkTokenAddr, wnftAddress],
  });

  log("NFTPoolBurnAndMint contract deployed successfully");
};

module.exports.tags = ["sourcechain", "all"];
