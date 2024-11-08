import React, { useState } from "react"
import './index.css'
function ColorPicker(){

    const [color,setColor]=useState("#FFFFFF")
    const handleChange = (event) => {
        setColor(event.target.value);
    };
    return(<div>
        <h1>Color Picker</h1>
        <div id="container">
        
        <div id="color-display" style={{backgroundColor:color}}>
        <p >Selected Color: {color}</p>
        </div>
        <input type="color" value={color} onChange={handleChange}/>
        </div>
    </div>);
}
export default ColorPicker