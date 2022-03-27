import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

let tokenAbi = [
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function balanceOf(address owner) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
];

let NftAbi = [
  "function mintWithBNB(uint256 _amount) public payable",
  "function mintWithWeland(uint256 _amount) public payable",
];

let provider = new ethers.providers.JsonRpcProvider(
  "https://speedy-nodes-nyc.moralis.io/1d19a6082204e3ecd8dcf0b9/bsc/testnet"
);

let nftAddress = "0xa623E4Cd785455Be0D55aAc093f3A0F61f1EeaBE";
let tokenAddress = "0x0b28c2cC23AF5600588f106e6f87f80962B8E039";

// let nftInstance = new ethers.Contract(nftAddress, NftAbi, provider);
let tokenInstance = new ethers.Contract(tokenAddress, tokenAbi, provider);

export const getTokenAllowance = async (userAddress) => {
  try {
    let allowance = await tokenInstance.allowance(userAddress, nftAddress);
    // let balance = await tokenInstance.balanceOf(userAddress);

    return allowance > 0;
    // return { allowance: allowance > 0, balance };
  } catch (error) {
    console.log(error, "getTokenAllowance");
  }
};

export const approveToken = async (walletType) => {
  try {
    let newInstance = await getContractInstance(walletType, "TOKEN");
    const maxInt =
      "115792089237316195423570985008687907853269984665640564039457584007913129639935";

    let tx = await newInstance.approve(nftAddress, maxInt);
    let receipt = await tx.wait();

    return receipt;
  } catch (error) {
    console.log(error, "approveToken");
    if (error.data) {
      window.alert(error.data.message);
    }
  }
};

export const mint = async (_amount, type, walletType) => {
  try {
    console.log(_amount, type, walletType);
    let newInstance = await getContractInstance(walletType, "NFT");
    let tx;

    if (type === "BNB") {
      let value = ethers.utils.parseUnits(
        Number(_amount * 0.02).toString(),
        "ether"
      );

      tx = await newInstance.mintWithBNB(_amount, { value });
    } else if (type === "WEE") {
      tx = await newInstance.mintWithWeland(_amount);
    }
    let receipt = await tx.wait();

    return receipt;
  } catch (error) {
    console.log(error, "mint");
    if (error.data) {
      window.alert(error.data.message);
    }
  }
};

const getContractInstance = async (walletType, contract) => {
  if (walletType === "WALLET_CONNECT") {
    let newProvider = new WalletConnectProvider({
      rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
    });

    await newProvider.enable();
    let signer = newProvider.getSigner(0);
    if (contract === "NFT") {
      return new ethers.Contract(nftAddress, NftAbi, signer);
    } else if (contract === "TOKEN") {
      return new ethers.Contract(tokenAddress, tokenAbi, signer);
    }
  } else {
    let newProvider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = newProvider.getSigner(0);

    if (contract === "NFT") {
      return new ethers.Contract(nftAddress, NftAbi, signer);
    } else if (contract === "TOKEN") {
      return new ethers.Contract(tokenAddress, tokenAbi, signer);
    }
  }
};
