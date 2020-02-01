import React, { useState } from "react";
import Spindle from "./Spindle";

const Towers = () => {

const initialState = {
    totalBlocks: 5,
    moves: 0,
    towers: [[5, 4, 3, 2, 1], [], []]
}

const [towerData, setTowerData] = useState(initialState);

if (!towerData)
    { return <div></div>; }

return (
    <div className="towerWrapper">
        <div className="towers">
            <Spindle spindleId="0" towerData={towerData} setTowerData={setTowerData} />
            <Spindle spindleId="1" towerData={towerData} setTowerData={setTowerData} />
            <Spindle spindleId="2" towerData={towerData} setTowerData={setTowerData} />
        </div>
        <div className="platform"></div>
    </div>
    );
};

export default Towers;