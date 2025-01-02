module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy,log } = deployments;
  const { firstAccount } = await getNamedAccounts();

  log("Deploying MyToken contract...");

  await deploy("MyToken", {
    contract: "MyToken",
    from: firstAccount,
    log: true,
    args: ["MyToken", "MT"],
  });

  log("NFT contract deployed successfully");
};

module.exports.tags = ["sourcechain","all"];
