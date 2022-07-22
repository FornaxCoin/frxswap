const DVT = artifacts.require("./UniswapV2Router02.sol")
console.log(DVT);
module.exports = function (deployer){
  deployer.deploy(DVT,'0xa8f407b929b0Ad52dEa54cCa07ae5101ded0C4f1','0xc778417E063141139Fce010982780140Aa0cD5Ab')
}
