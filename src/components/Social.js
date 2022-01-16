import Telegram from "./Icons/Telegram";
import Instagram from './Icons/Instagram';
import Twitter from './Icons/Twitter';
import MSocial from './Icons/MSocial';
import BSC from './Icons/BSC';
import resources from "../images/titles/resources.svg";

export default function Social() {

    return (
        <div className="social">
            <div className="social__wrapper">
                <img src={resources} alt="resources" className="social__title" />
                <ul className="social__list">
                    <li className="social__item">
                        <a href="https://t.me/WeenieLand" className="social__link" target="_blank" rel="noreferrer">
                            <Telegram className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://mobile.twitter.com/weenie__land" className="social__link" target="_blank" rel="noreferrer">
                            <Twitter className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://instagram.com/weenie_land_official?r=nametag" className="social__link" target="_blank" rel="noreferrer">
                            <Instagram className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="/" className="social__link" target="_blank" rel="noreferrer">
                            <MSocial className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://bscscan.com/token/0x9edccffbfa09be9ae65bfb1352965ba184ab4c09" className="social__link" target="_blank" rel="noreferrer">
                            <BSC className="social__icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
