export interface IItem {
    id: string,
    image?: string,
    name: string,
    date: number,
    unreadMessages: number
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
        };

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
