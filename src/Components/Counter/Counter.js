import React, {useState} from 'react';
import Display from "./Display";
import Button from "./Button";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const Reset = () => setCounter(0);
    return (
        <div>
            <Display counter={counter}/>
            <Button handleClick={increaseByOne} text={'Plus'}/>
            <Button handleClick={Reset} text={'Reset'}/>
            <Button handleClick={decreaseByOne} text={'Minus'}/>
        </div>
    )
};

export default Counter;
