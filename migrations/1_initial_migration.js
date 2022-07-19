const DVT = artifacts.require("./UniswapV2Router02.sol")
console.log(DVT);
module.exports = function (deployer){
  deployer.deploy(DVT,'0xa8f407b929b0Ad52dEa54cCa07ae5101ded0C4f1','0x49EE5f57422769e4bb6c3ecb9Cd7eD693c35c11d')
}
