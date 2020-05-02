import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from "./Components/Greeting/Greeting";
import * as serviceWorker from './serviceWorker';
import Footer from "./Components/Footer";
import Counter from "./Components/Counter/Counter";
import Notes from "./Components/Notes";

ReactDOM.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<Greeting />*/}
        {/*<Counter/>*/}
        <Notes/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
