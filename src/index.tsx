import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './modules/index';
import initMessagesListener from './listeners/messages';
import App from './components/app';
import './index.css';

import generateItems from './helpers/generateItems';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

initMessagesListener(store.dispatch);
