import App from "./App";
import React from "react";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
let second = 0;
setInterval(()=>{
    second ++;

    const Four = Math.floor(second);
    const Three = Math.floor(second/10);
    const Two = Math.floor(second/100);
    const One = Math.floor(second/1000);
    root.render(
        <React.StrictMode>
            <App numOne={One} numTwo={Two} numThree={Three}  numFour={Four}/>
        </React.StrictMode>
    )
}, 1000
)

reportWebVitals();