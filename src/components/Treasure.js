import { useRef, useState } from "react";
import bnbButton from "../images/chests/bnb-button.png";
import welandButton from "../images/chests/weland-button.png";
import addToRefs from './../services/addToRefs';

export default function Treasure() {
    const [chests, setChests] = useState(["closed", "closed", "closed", "closed", "closed"]);
    const itemElements = useRef([]);

    function toggleChest(index) {
        if (chests[index] === "opened" || chests[index] === "opened fullscreen") return;
        setChests(chests.map((item, itemIndex) => index === itemIndex ? "animation" : item));
        setTimeout(() => {
            setChests(chests.map((item, itemIndex) => index === itemIndex ? "opened fullscreen" : item));
        }, 1500);
    }

    function closePopup(e, index) {

        if (e.nativeEvent.target === itemElements.current[index]) {
            setChests(chests.map((item, itemIndex) => item === "opened fullscreen" ? "opened" : item));
        }
    }

    return (
        <main className="main main--treasure">
            <div className="map map--treasure">
                <ul className="map__chests">
                    {chests.map((item, index) => {
                        return (
                            <li className={"map__chest " + chests[index]} key={index} onClick={(e) => {
                                toggleChest(index);
                                closePopup(e, index);
                            }} ref={el => addToRefs(el, itemElements)}>
                                <div className="map__chest-wrapper">
                                    <button className="map__chest-button map__chest-button--closed"></button>
                                    <button className="map__chest-button map__chest-button--opened"></button>
                                    <button className="map__chest-action map__chest-action--bnb">
                                        <img src={bnbButton} className="map__chest-action-icon" alt="bnb" />
                                    </button>
                                    <button className="map__chest-action map__chest-action--weland">
                                        <img src={welandButton} className="map__chest-action-icon" alt="bnb" />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
