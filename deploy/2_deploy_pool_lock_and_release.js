const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { firstAccount } = await getNamedAccounts();

  log("Deploying NFTPoolLockAndRelease contract...");

  const ccipSimulatorDeployment = await deployments.get("CCIPLocalSimulator");
  const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorDeployment.address);
  const ccipSimulatorConfig = await ccipSimulator.configuration();
  const sourceChainRouter = ccipSimulatorConfig.sourceRouter_;
  const linkTokenAddr = ccipSimulatorConfig.linkToken_;
  const nftDeployment = await deployments.get("MyToken");
  const nftAddress = nftDeployment.address;

  await deploy("NFTPoolLockAndRelease", {
    contract: "NFTPoolLockAndRelease",
    from: firstAccount,
    log: true,
    args: [sourceChainRouter, linkTokenAddr, nftAddress],
  });

  log("NFTPoolLockAndRelease contract deployed successfully");
};

module.exports.tags = ["sourcechain", "all"];
