import { useState } from "react";
import bnbButton from "../images/chests/bnb-button.png";
import welandButton from "../images/chests/weland-button.png";

export default function Treasure() {
    const [chests, setChests] = useState(["closed", "closed", "closed", "closed", "closed"]);

    function toggleChest(index) {
        if (chests[index] === "opened") return;
        setChests(chests.map((item, itemIndex) => index === itemIndex ? "animation" : item));
        setTimeout(() => {
            setChests(chests.map((item, itemIndex) => index === itemIndex ? "opened" : item));
        }, 1500);
    }

    return (
        <main className="main main--treasure">
            <div className="map map--treasure">
                <ul className="map__chests">
                    {chests.map((item, index) => {
                        return (
                            <li className={"map__chest map__chest--" + chests[index]} key={index} onClick={() => toggleChest(index)}>
                                <button className="map__chest-button map__chest-button--closed"></button>
                                <button className="map__chest-button map__chest-button--opened"></button>
                                <button className="map__chest-action map__chest-action--bnb">
                                    <img src={bnbButton} className="map__chest-action-icon" alt="bnb" />
                                </button>
                                <button className="map__chest-action map__chest-action--weland">
                                    <img src={welandButton} className="map__chest-action-icon" alt="bnb" />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
