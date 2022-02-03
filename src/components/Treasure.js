import { useState } from "react";

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
                                <button className="map__chest-button"></button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
