import React from "react";

const Instructions = () => {

return (
    <div className="instructions">
        <h2>The Tower of Hanoi</h2>
        <p>Legend says that in a temple somewhere, there are 64 discs on a spindle. Monks move the discs according to the following rules.
            <ul>
                <li>The discs may only be moved one at a time.</li>
                <li>Only a smaller disc may be placed on top of a larger one.</li>
            </ul>
        When all 64 discs are moved to the rightmost spindle, the world will end.</p>
    </div>
    );
};

export default Instructions;