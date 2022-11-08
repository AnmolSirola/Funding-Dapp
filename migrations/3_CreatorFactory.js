const cf = artifacts.require("CreatorFactory");

module.exports = function (deployer) {
  deployer.deploy(cf);
};
