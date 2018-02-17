import { createStore } from 'redux';
import { combineReducers } from 'redux';
import generateItems from '../helpers/generateItems';
import messages, { IState as IMesagges } from '../modules/messages';

export interface IState {
    messages: IMesagges
};

const reducers = combineReducers({
    messages
});

export function initStore() {
    return createStore(reducers, {
        messages: {
            list: generateItems()
        }
    });
};

