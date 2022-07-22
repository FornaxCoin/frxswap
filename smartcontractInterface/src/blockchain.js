import { providers, utils, Contract } from 'ethers';
import CONTRACT from './UniswapV2Factory.json';
export const CONTRACT_ADDRESS = '0x4445047c6c8535eae4BAa56D424EC0C23DB1145B';
// const provider = providers.getDefaultProvider('rinkeby');

export const isMetaMaskInstalled = () => {
  // console.log('window.ethereum = ', window.ethereum, typeof window.ethereum)
  return typeof window.ethereum !== 'undefined';
};
console.log('isMetaMaskInstalled = ', isMetaMaskInstalled())

export const provider = isMetaMaskInstalled()
  ? new providers.Web3Provider(window.ethereum)
  : {};
console.log('provider = ', provider)

export const signer = isMetaMaskInstalled() ? provider.getSigner() : {};
console.log('signer = ', signer)

export const contractInterface = isMetaMaskInstalled()
  ? new Contract(CONTRACT_ADDRESS, CONTRACT.abi, signer)
  : {};

export const isMetaMaskConnected = async () => {
  const accounts = await provider.listAccounts();
  return accounts.length > 0;
};

export const connectToMetaMask = async () => {
  if (isMetaMaskInstalled() && !(await isMetaMaskConnected())) {
    console.log('Metamask not conneced = ');
    console.log('connecting...');
    await provider.send('eth_requestAccounts', []);
  } else {
    console.log('Connected');
  }
};

export const hexToInteger = (hexa) => {
  return parseInt(hexa, 16);
};
