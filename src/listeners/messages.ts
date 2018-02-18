import logger from '../helpers/logger';
import { IItem, setContact } from '../modules/messages';

interface IEvent {
    data: {
        type: string,
        data: IItem
    }
};

interface IFakeMessage {
    (event: IEvent): void;
};

interface IFakeSocket {
    onmessage: IFakeMessage
};

let socket:IFakeSocket;

export default function initMessagesListener(dispatch: any) {
    socket = {
        onmessage: function({ data }) {
            dispatch(setContact(data.data));
        }
    }
};

let fakeCounter = 0;
const stubContacts = require('../data.json');
const contactsIds = Object.keys(stubContacts);

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

type TMessageType = 'unknown_user' | 'top10' | 'random';

/**
 * Fake message trigger
 */
export function sendMessage(type: TMessageType) {
    let data: IItem;
    let id: string;

    const baseData = {
        date: Date.now(),
        unreadMessages: 1
    };

    logger('info', `New message, type: ${type}`);

    switch (type) {
        case 'unknown_user':
            data = {
                ...baseData,
                id: Math.random() * 1000 + '-' + Date.now(),
                name: `UnknownUser-${++fakeCounter}`
            }
            break;
        case 'top10':
            id = contactsIds[getRandomInt(0, 9)];
            data = {
                ...baseData,
                id: id,
                name: stubContacts[id].name
            };
            break;
        case 'random':
            id = contactsIds[getRandomInt(0, contactsIds.length - 1)];
            data = {
                ...baseData,
                id: id,
                name: stubContacts[id].name
            };
            break;
    }


    socket.onmessage({
        data: {
            type,
            data
        }
    })
};

