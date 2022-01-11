import Popup from "./common/Popup";

import market1 from "../images/market/market1.png";
import market2 from "../images/market/market2.png";
import market3 from "../images/market/market3.png";
import market4 from "../images/market/market4.png";

export default function MarketPopup({ popupShowed, setPopupShowed, className }) {
    return (
        <Popup className={className} popupShowed={popupShowed} setPopupShowed={setPopupShowed}>
            <button className="remove popup__remove" onClick={() => setPopupShowed(false)} />
            <h1 className="popup__title">Market</h1>
            <div className="popup__list-wrapper">
                <ul className="popup__list">
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market1} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market2} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market3} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market4} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market1} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market2} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market3} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market4} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market1} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                    <li className="popup__item">
                        <a href="/" className="popup__item-link">
                            <img src={market2} alt="market1" className="popup__item-image" />
                        </a>
                    </li>
                </ul>
            </div>
        </Popup>
    )
}
