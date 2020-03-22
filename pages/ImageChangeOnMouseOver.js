import React from "react";
import ImageToggle from "../src/ImageToggleOnMouseOver";
const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggle 
                primaryImg="/static/sun.jpg" 
                secondaryImg="/static/moon.jpg"
                alt="" 
            />
        </div>
    )
}

export default ImageChangeOnMouseOver;