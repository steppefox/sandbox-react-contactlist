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
        return <div className={this.props.className}>
            <div>
                <button type="button" onClick={() => sendMessage('unknown_user')}>
                    New message from Unknow user
                </button>
            </div>
            <div>
                <button type="button" onClick={() => sendMessage('top10')}>
                    New message from top 10 contacts list
                </button>
            </div>
            <div>
                <button type="button" onClick={() => sendMessage('random')}>
                    New message from contacts list
                </button>
            </div>
        </div>;
    };
}

export default styled(Toolbar) `
    flex: 1 1 auto;
    padding: 2rem 1.5rem;
    background: #fff;

    button {
        margin-bottom: 1.5rem;
        padding: 2rem;

        cursor: pointer;
        font-size: 1.6rem;

        border: none;
        background-color: #ddd;
        transition: background-color .3s linear;

        &:active {
            background-color: #eee;
        }
    }
`;


