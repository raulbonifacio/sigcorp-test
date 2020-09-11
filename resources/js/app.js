import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './components/App';

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

