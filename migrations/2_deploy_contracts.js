const ShanToken = artifacts.require("../contracts/ShanToken.sol");

module.exports = function (deployer) {
  deployer.deploy(ShanToken);
};
