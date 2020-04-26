import React, {useState} from 'react';
import './App.css';

const App = (props) => {
    const [counter, setCounter] = useState(25);
    setTimeout(
        () => setCounter(counter + 1), 100
    );
    return (
        <div>
            {counter}
        </div>
    )
};

export default App;
