export interface IItem {
    id: string,
    image?: string,
    name: string,
    date: number,
    unreadMessages: number,
    lastMessage: string,
    messages?: Array<string>
};

export interface IIndexedItems {
    [index: string]: IItem
};

export interface IState {
    list: IIndexedItems,
    sorted: Array<IItem["id"]>
};

const initialState: IState = {
    list: {},
    sorted: []
};

interface IAction {
    type: string
    payload: any
};

const ACTION_SET_CONTACT = 'app/messages/ACTION_SET_CONTACT';
const ACTION_READ_CONTACT_MESSAGES = 'app/messages/ACTION_READ_CONTACT_MESSAGES';

export default function reducer(state = initialState, action:IAction) {
    switch (action.type) {
        case ACTION_SET_CONTACT: {
            const item = <IItem>action.payload;
            const id = item.id;

            return {
                ...state,
                list: {
                    ...state.list,
                    [id]: action.payload
                },
                sorted: state.list[id] ?
                    [
                        id,
                        ...state.sorted.filter((vl) => vl !== id)
                    ] :
                    [
                        id,
                        ...state.sorted
                    ]
            };
        }

        case ACTION_READ_CONTACT_MESSAGES: {
            const id: IItem["id"] = action.payload;

            return {
                ...state,
                list: {
                    ...state.list,
                    [id]: {
                        ...state.list[id],
                        unreadMessages: 0
                    }
                }
            };
        }

        default:
            return state;
    }
};

export function setContact(data: IItem) {
    return {
        type: ACTION_SET_CONTACT,
        payload: data
    };
};

export function readContactMessages(payload: IItem["id"]) {
    return {
        type: ACTION_READ_CONTACT_MESSAGES,
        payload: payload
    };
}
