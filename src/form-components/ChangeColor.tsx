import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "cyan",
        "magenta",
    ];

    return (
        <div>
            {colors.map((color) => (
                <div key={color}>
                    <input
                        type="radio"
                        name="colorChoice"
                        id={`color-${color}`}
                        value={color}
                        onChange={() => setChosenColor(color)}
                        checked={chosenColor === color}
                    />
                    <label htmlFor={`color-${color}`}>{color}</label>
                </div>
            ))}
            <div>
                You have chosen
                <span> </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
