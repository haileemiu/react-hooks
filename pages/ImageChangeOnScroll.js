import React from "react";
import ImageToggle from "../src/ImageToggleOnScroll";
const ImageChangeOnScroll = () => {
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

export default ImageChangeOnScroll;