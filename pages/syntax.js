import React, {useEffect} from "react";

const Syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useEffect(false);

    // first parameter must be a function

    useEffect(() => {
        console.log("in useEffect")
        // must return a function
        return () => {
            console.log("in useEffect Clear")
        }
    // second parameter is an array that contains a list of dependencies
    // if empty, then it is only called once when the component is first mounted
    // if want it called again, you want to list all the values you want to change
    }, [checkBoxValue])
    return (
        <div></div>
    );
};

export default Syntax;