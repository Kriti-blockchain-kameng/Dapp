import './style.css'
import React from 'react'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios'
//import { Network, Provider } from 'aptos';
function App() {


  const [windowDefined, setWindowDefined] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const pathname = usePathname();


  const getMetaMaskWallet = () => {
    if (typeof (window as any).ethereum !== 'undefined') {
      return (window as any).ethereum;
    } else {
      window.open('https://metamask.io/download.html', '_blank');
    }
  };



  const handleConnectClick = async () => {
    const ethereum: any = getMetaMaskWallet();
    try {
      const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
      const account: string = accounts[0];

      setAddress(account);
      setConnected(true);
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('walletAddress', account);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDefined(true);
    }
  }, []);

  useEffect(() => {
    const isWalletConnected = localStorage.getItem('walletConnected');
    if (isWalletConnected) {
      setConnected(true);
    }
  }, []);

  const handleDisconnect = () => {
    setConnected(false);
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
    setAddress(null);
  };

  const abbreviatedAddress = (address: string | null | undefined) => address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';





  return (
    <div>
      <div className="bitHealth">BitHealth</div>
      <div className="login-container">
        <div className="login">
          <div className='sbi'></div>
          <div className='login-box'>
            <div className='login-name'>Login</div>
            <div className='login-wallet'>
              <div className='wallet'></div>
              <div className='manage'>Login with Wallet Manager</div>
              <div className='go'></div>
            </div>
            <div className='login-account'>Don&apos;t have an Account?</div>
            <div className='login-sign'>
              <div className='manage'>Sign Up</div>
              <div className='go'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App