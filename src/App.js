import React, {useState} from 'react';
import './App.css';

const App = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseByOne = () => setCounter(counter + 1);
    const Reset = () => setCounter(0);
    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>
                Plus
            </button>
            <button onClick={Reset}>
                Reset
            </button>
        </div>
    )
};

export default App;
