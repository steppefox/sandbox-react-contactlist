interface IAction {
    type: string
    payload: object
}

export interface IItem {
    id: string,
    image: string,
    name: string,
    date: number,
    unreadMessages: number
}

export interface IIndexedItems {
    [index: string]: IItem
};

export interface IState {
    list: IIndexedItems
};

const initialState: IState = {
    list: {}
};

export default function reducer(state = initialState, action:IAction) {
    switch (action.type) {
        // do reducer stuff
        default:
            return state;
    }
}
