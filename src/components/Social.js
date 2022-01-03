import { useEffect, useRef, useState } from "react";

import scroll from "../images/scroll.svg";
import Telegram from "./Icons/Telegram";
import Instagram from './Icons/Instagram';
import Twitter from './Icons/Twitter';
import MSocial from './Icons/MSocial';
import BSC from './Icons/BSC';

export default function Social() {
    const [opened, setOpened] = useState(false);
    const socialElement = useRef(null);

    function close(e) {
        
        if (e.target.closest(".social") !== socialElement.current) {
            setOpened(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', close);

        return () => {
            document.removeEventListener('click', close);
        }
    }, []);

    return (
        <div className={"social" + (opened ? " opened" : "")} ref={socialElement}>
            <button className="social__button" onClick={() => setOpened(true)}>
                <img src={scroll} alt="" className="social__button-image" />
            </button>
            <h2 className="social__title">Resources</h2>
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
    )
}
