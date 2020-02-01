import React, { useState } from "react";
import Block from "./Block";

const Spindle = ({spindleId, towerData, setTowerData}) => {

    let blocksOnSpindle = towerData.towers[spindleId];

    return (
        <div className="spindle">
            {
                blocksOnSpindle.map(size =>
                {
                    return (
                        <Block key={"block" + size} size={size} towerData={towerData} setTowerData={setTowerData}  />
                    )
                }

                )
            }
            <div className="spindlePost"></div>
        </div>
        );
};

export default Spindle;