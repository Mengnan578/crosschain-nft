module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy,log } = deployments;
    const { firstAccount } = await getNamedAccounts();
  
    log("Deploying CCIP contract...");
  
    await deploy("CCIPLocalSimulator", {
      contract: "CCIPLocalSimulator",
      from: firstAccount,
      log: true,
    });
  
    log("CCIPLocalSimulator contract deployed successfully");
  };
  
  module.exports.tags = ["test","all"];
  