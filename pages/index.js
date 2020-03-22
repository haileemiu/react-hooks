import React, {useState} from "react";

const InputElement = () => {

    // first returns: a read-only variable 
    // whose value can only be set with the 2nd value, 
    // which is always a function (ie setInputText).
    // second returns: a function when called, updates state, 
    // which is then reflected in the read-only variable
    const [inputText, setInputText] = useState("")

    return <div><input 
        onChange={(e) => {
            setInputText(e.target.value)
        }}
        placeholder="your text here"/><br/>

        {inputText}
    </div>
}

export default InputElement; 