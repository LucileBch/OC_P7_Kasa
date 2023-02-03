/***     INDEX     ***/

/* Importing react librairies*/
/* Importing App component (routing logic) and main style*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/index.jsx';
import './styles/index.css';

/* Creating root container, rendering the App component */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
