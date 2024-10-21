import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");

    const colorOptions = [
        { label: "red", value: "red" },
        { label: "blue", value: "blue" },
        { label: "green", value: "green" },
        { label: "yellow", value: "yellow" },
        { label: "purple", value: "purple" },
        { label: "orange", value: "orange" },
        { label: "cyan", value: "cyan" },
        { label: "magenta", value: "magenta" },
    ];

    return (
        <div>
            {colorOptions.map((color) => (
                <Form.Check
                    key={color.value}
                    inline
                    type="radio"
                    name="response"
                    id={`response-${color.value}`}
                    label={color.label}
                    value={color.value}
                    checked={chosenColor === color.value}
                    onChange={(e) => setChosenColor(e.target.value)}
                />
            ))}
            <div>
                You have chosen
                <span> </span>
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosenColor,
                        padding: "5px",
                        borderRadius: "5px",
                        color: "white",
                    }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
