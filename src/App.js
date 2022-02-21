import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Treasure from "./components/Treasure";
import Social from "./components/Social";
import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ConnectPopup from "./components/ConnectPopup";

function App() {
  const [userAddress, setUserAddress] = useState("");
  const [walletType, setWalletType] = useState("");
  const [popupShowed, setPopupShowed] = useState(false);

  const connectMetamask = async () => {
    try {
      console.log("hola");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setUserAddress(accounts[0]);
      setWalletType("Metamask");

      window.localStorage.setItem("userAddress", accounts[0]);

      //   const chainId = await window.ethereum.request({
      //     method: "eth_chainId",
      //   });

      //   if (chainId !== "0x38") {
      //     await window.ethereum.request({
      //       method: "wallet_switchEthereumChain",
      //       params: [{ chainId: "0x38" }],
      //     });
      //   }

      window.ethereum.on("accountsChanged", function (accounts) {
        setUserAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (_chainId) =>
        window.location.reload()
      );
      setPopupShowed(false);
    } catch (error) {
      console.log(error, "error"); //
    }
  };

  const connectWalletConnect = async () => {
    try {
      console.log("hola");
      const provider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed.binance.org/",

          // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        network: "binance",
        chainId: 56,
        infuraId: null,
      });

      await provider.enable();

      const accounts = await provider.listAccounts();

      setUserAddress(accounts[0]);
      setWalletType("WALLET_CONNECT");
      setPopupShowed(false);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = async () => {
    if (walletType === "WALLET_CONNECT") {
      const provider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed.binance.org/",

          // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        network: "binance",
        chainId: 56,
        infuraId: null,
      });
      await provider.disconnect();
      setPopupShowed(false);
    } else {
      window.localStorage.removeItem("userAddress");
    }

    setUserAddress("");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userAddress={userAddress}
              connectMetamask={connectMetamask}
              connectWalletConnect={connectWalletConnect}
              disconnectWallet={disconnectWallet}
              popupShowed={popupShowed}
              setPopupShowed={setPopupShowed}
            />
          }
        />
        <Route
          path="/treasure"
          element={
            <Treasure
              walletType={walletType}
              userAddress={userAddress}
              connectMetamask={connectMetamask}
              connectWalletConnect={connectWalletConnect}
              setPopupShowed={setPopupShowed}
            />
          }
        />
      </Routes>
      <Social />
      <ConnectPopup
        connectMetamask={connectMetamask}
        connectWalletConnect={connectWalletConnect}
        popupShowed={popupShowed}
        setPopupShowed={setPopupShowed}
        className="popup--connect"
      />
    </>
  );
}

export default App;

// nft  : 0x6725478558445410E336048f33F6685E9b2639aD
// token : 0x0b28c2cC23AF5600588f106e6f87f80962B8E039
