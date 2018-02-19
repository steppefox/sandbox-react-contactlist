import logger from '../helpers/logger';
import { IItem, setContact } from '../modules/messages';

interface IEvent {
    data: {
        type: string
    }
};

interface IFakeMessage {
    (event: IEvent): void;
};

interface IFakeSocket {
    onmessage: IFakeMessage
};

let socket:IFakeSocket;

let fakeCounter = 0;

/**
 * Fake socket message handler, ofc. it doesn't need any store state in real life, only actions dispatch
 */
export default function initMessagesListener({ dispatch, getState }: any) {
    socket = {
        onmessage: function({ data }) {
            const { type } = data;

            let contact: IItem;
            let id: string;

            const baseContact = {
                date: Date.now(),
                unreadMessages: 1
            };

            const { list, sorted } = getState().messages;

            switch (type) {
                case 'unknown_user':
                    contact = {
                        ...baseContact,
                        id: Math.random() * 1000 + '-' + Date.now(),
                        name: `UnknownUser-${++fakeCounter}`
                    }
                    break;
                case 'top10':
                    id = sorted[getRandomInt(0, 9)];
                    contact = {
                        ...baseContact,
                        id: id,
                        name: list[id].name,
                        unreadMessages: list[id].unreadMessages + 1
                    };
                    break;
                case 'random':
                    id = sorted[getRandomInt(0, sorted.length - 1)];
                    contact = {
                        ...baseContact,
                        id: id,
                        name: list[id].name,
                        unreadMessages: list[id].unreadMessages + 1
                    };
                    break;
            }

            dispatch(setContact(contact));
        }
    }
};

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

type TMessageType = 'unknown_user' | 'top10' | 'random';

/**
 * Fake socket message trigger
 */
export function sendMessage(type: TMessageType) {
    logger('info', `New message, type: ${type}`);

    socket.onmessage({
        data: {
            type
        }
    });
};

