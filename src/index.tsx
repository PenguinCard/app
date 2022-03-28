// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// bootstrap
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';

// bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Provider } from 'react-redux';
import { store } from './store';

// component
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("app")
)
