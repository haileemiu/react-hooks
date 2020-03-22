import React, {useRef} from "react";

const ImageToggle = ({ primaryImg, secondaryImg }) => {

    // Swap image on mouse over
    const imageRef = useRef(null);

    return (
        <img 
            onMouseOver = {() => { imageRef.current.src = secondaryImg; }} 
            onMouseOut = {() => { imageRef.current.src = primaryImg; }}
            src={primaryImg}
            alt=""
            ref={imageRef}
            />
    );
};

export default ImageToggle;