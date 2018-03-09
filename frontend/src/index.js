import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import History from "./History";

ReactDOM.render(
    <div>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/history" component={History} />
            </div>
        </Router>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
