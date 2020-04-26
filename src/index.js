import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Code1 from "./Components/code1";
import * as serviceWorker from './serviceWorker';
import Footer from "./Components/footer";

const name ='jojo';
const t = [2,5,9]
const s = t.map(t => t*t)
console.log(s)
ReactDOM.render(
    <React.StrictMode>
        {/*<App/>*/}
        <Code1 name={s}/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
