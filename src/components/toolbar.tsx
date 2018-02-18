import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../modules/index';
import { IIndexedItems } from '../modules/messages';
import { sendMessage } from '../listeners/messages';

export interface IProps {
    className?: string
};

export interface IState { }
export class Toolbar extends React.Component<IProps, IState> {
    render() {
        return <div>
            <button type="button" onClick={() => sendMessage('unknown_user')}>
                New message from Unknow user
            </button>
            <button type="button" onClick={() => sendMessage('top10')}>
                New message from top 10 contacts list
            </button>
            <button type="button" onClick={() => sendMessage('random')}>
                New message from contacts list
            </button>
        </div>;
    };
}

const StyledToolbar = styled(Toolbar) `
    width: 25%;
    min-width: 20rem;
    max-width: 31.5rem;
    padding-top: 1rem;
    background: #fff;
    border-right: 0.1rem solid #ddd;
`;

export default connect(null, (dispatch) => {
    return {

    };
})(StyledToolbar);


