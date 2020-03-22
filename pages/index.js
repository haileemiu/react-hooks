import React, {useState} from "react";

const InputElement = () => {

    // first returns: a read-only variable 
    // whose value can only be set with the 2nd value, 
    // which is always a function (ie setInputText).
    // second returns: a function when called, updates state, 
    // which is then reflected in the read-only variable
    const [inputText, setInputText] = useState("")
    const [historyList, setHistoryList] = useState([]);

    return <div><input 
        onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="your text here"/><br/>

        {inputText}
        <hr/><br/>
        <ul>
            {historyList.map((record)=> {
                return <div>{record}</div>
            })}
        </ul>
    </div>
}

export default InputElement; 