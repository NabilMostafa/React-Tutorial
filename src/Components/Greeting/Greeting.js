import React from "react";
import Detail from "./Details";

const Greeting = (props) => {
    const name = 'Nabil';
    const age = 25;
    return (
        <div>
            <Detail name={"maya"} age={20+10}/>
            <Detail name={name} age={age}/>
        </div>
    )
};
export default Greeting;