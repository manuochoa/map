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
                        <a href="/" className="social__link">
                            <Telegram className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="/" className="social__link">
                            <Instagram className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="/" className="social__link">
                            <Twitter className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="/" className="social__link">
                            <MSocial className="social__icon" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="/" className="social__link">
                            <BSC className="social__icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
