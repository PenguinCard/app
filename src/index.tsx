// react
import * as React from 'react';
import { createRoot } from 'react-dom/client';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// bootstrap
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';

// bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Provider } from 'react-redux';
import { store } from './redux/store';

// component
import App from './App';


const root = createRoot(document.getElementById("app"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
