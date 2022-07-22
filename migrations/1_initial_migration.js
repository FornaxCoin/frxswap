// const WFRX = artifacts.require("./WFRX.sol")
// console.log(WFRX);
// module.exports = function (deployer){
//   deployer.deploy(WFRX)
// }
// const DVT = artifacts.require("./UniswapV2Factory.sol")
// console.log(DVT);
// module.exports = function (deployer){
//   deployer.deploy(DVT,'0xC21a4AD429e4E2E194816d989d9bBd255c67Fd6C')
// }
//
const DVT = artifacts.require("./UniswapV2Router02.sol")
console.log(DVT);
module.exports = function (deployer){
  deployer.deploy(DVT,'0x4445047c6c8535eae4BAa56D424EC0C23DB1145B','0xc778417E063141139Fce010982780140Aa0cD5Ab')
}
