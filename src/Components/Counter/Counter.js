import React, {useState} from 'react';
import Display from "./Display";
import Button from "./Button";
import History from "./History";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseByOne = () => {
        setAll(allClicks.concat('increase'));
        setCounter(counter + 1)
    };
    const decreaseByOne = () => {
        setAll(allClicks.concat('decrease'));
        setCounter(counter - 1)
    };
    const Reset = () => setCounter(0);

    const [allClicks, setAll] = useState([]);

    return (
        <div>
            <Display counter={counter}/>
            {/*<p>*/}
            {/*    {allClicks.join(' ')}*/}
            {/*</p>*/}
            <Button handleClick={increaseByOne} text={'Plus'}/>
            <Button handleClick={Reset} text={'Reset'}/>
            <Button handleClick={decreaseByOne} text={'Minus'}/>
            <p>
                the History is :
            </p>
            <p>
            <History allClicks={allClicks}/>
            </p>
        </div>
    )
};

export default Counter;
