import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './modules/index';
import App from './components/app';
import './index.css';

ReactDOM.render(
    <Provider store={initStore()}>
        <App />
    </Provider>,
    document.getElementById('app')
);
