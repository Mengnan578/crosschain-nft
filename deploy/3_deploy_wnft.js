module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy,log } = deployments;
    const { firstAccount } = await getNamedAccounts();
  
    log("Deploying WNFT contract...");
  
    await deploy("WrappedMyToken", {
      contract: "WrappedMyToken",
      from: firstAccount,
      log: true,
      args: ["WrappedMyToken", "WNFT"],
    });
  
    log("WNFT contract deployed successfully");
  };
  
  module.exports.tags = ["destchain","all"];
  