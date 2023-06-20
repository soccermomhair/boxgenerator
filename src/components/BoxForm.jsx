import React, { useState } from 'react';

const BoxForm = ({ boxes, setBoxes }) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const formHandler = (event) => {
        event.preventDefault();
        const newBox = { color: color, height: height + "px", width: width + "px" };
        console.log("newBox", newBox)
        setBoxes([...boxes, newBox])
        console.log("boxes", boxes)
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" name="color" id="color" value={color} onChange={(event) => setColor(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type="number" name="height" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input type="number" name="width" id="width" value={width} onChange={(event) => setWidth(event.target.value)} />
                </div>
                <button>Create Box</button>
            </form>
        </div>
    )
}

export default BoxForm;