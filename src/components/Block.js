import React, { useState } from "react";

const Block = ({size, towerData, setTowerData}) => {

    const getBlockSize = (size) => {
        return 25 + size * 25;
    }
    
    const colors = ["#663300", "#996600"];
    
    const getBlockColor = (size) => {
        return colors[size % colors.length];
    }
    
return (
        <>
            <div className="blockEdge" style={{width: getBlockSize(size) + 4, backgroundColor: getBlockColor(size)}}></div>
            <div className="block" style={{width: getBlockSize(size), backgroundColor: getBlockColor(size)}}></div>
            <div className="blockEdge" style={{width: getBlockSize(size) + 4, backgroundColor: getBlockColor(size)}}></div>
        </>  
        );

};

export default Block;