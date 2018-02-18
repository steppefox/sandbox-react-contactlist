import { createStore } from 'redux';
import { combineReducers } from 'redux';
import messages, { IState as IMesagges } from '../modules/messages';

export interface IState {
    messages: IMesagges
};

const reducers = combineReducers({
    messages
});

export function initStore() {
    const list = require('../data.json');

    return createStore(reducers, {
        messages: {
            list,
            sorted: Object.keys(list).sort((a, b) => list[b].date - list[a].date)
        }
    });
};

