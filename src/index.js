import React from 'react';
import ReactDOM from 'react-dom';

//note wrap your browser router around your application
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    //browserRouter tag gives the functionality of routing to our app tag, thats why its being wrapped with it
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));


