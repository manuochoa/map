import { useState } from 'react';
import { Link } from 'react-router-dom';

import connectWallet from './images/titles/connectWallet/connectWallet.png';
import mainLogo from './images/titles/mainLogo/mainLogo.png';
import farm from './images/titles/farm/farm.png';
import dungeon from './images/titles/dungeon/dungeon.png';
import staking from './images/titles/staking/staking.png';
import market from './images/titles/market/market.png';
import portal from './images/titles/portal/portal.png';
import wennieWar from './images/titles/wennieWar/wennieWar.png';
import Clouds from './components/Clouds';
import ConnectPopup from './components/ConnectPopup';

function App() {
    const [popupShowed, setPopupShowed] = useState(true);

    return (
        <div className="main">
            <div className="map">
                <Link to="/" className="link link--main">
                    <img src={mainLogo} alt="wennie land" className="link__title" aria-label='wennie land"' />
                </Link>
                <button className="link link--connectWallet" onClick={() => setPopupShowed(!popupShowed)}>
                    <img src={connectWallet} alt="connect wallet" className="link__title" aria-label='connect wallet' />
                </button>
                <Link to="/" className="link link--farm">
                    <img src={farm} alt="farm" className="link__title" aria-label="farm" />
                </Link>
                <Link to="/" className="link link--dungeon">
                    <img src={dungeon} alt="boo dungeon" className="link__title" aria-label='boo dungeon' />
                </Link>
                <Link to="/" className="link link--staking">
                    <img src={staking} alt="staking" className="link__title" aria-label='staking' />
                </Link>
                <Link to="/" className="link link--market">
                    <img src={market} alt="market" className="link__title" aria-label='market' />
                </Link>
                <Link to="/" className="link link--portal">
                    <img src={portal} alt="portal for the unknown" className="link__title" aria-label='portal for the unknown' />
                </Link>
                <Link to="/" className="link link--wennieWar">
                    <img src={wennieWar} alt="wennie war" className="link__title" aria-label='wennie war' />
                </Link>
                <Clouds />
            </div>
            <ConnectPopup popupShowed={popupShowed} setPopupShowed={setPopupShowed} className="popup--connect" />
        </div>
    );
}

export default App;
