import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const App = () => {
    const buttonText = 'Click Me!';
    
    return (
            <div>
                <label className="label" htmlFor="name">Enter name:</label>
                <input id="name" type="text"/>
                <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
            </div>
            );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
