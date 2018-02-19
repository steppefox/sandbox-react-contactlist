import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../modules/index';
import { IItem, readContactMessages } from '../modules/messages';

interface IPassedProps {
    id: string,
    className?: string
};

export interface IProps extends IItem , IPassedProps {
    readMessages(id: string): void
};
export interface IState { };

export class Contact extends React.Component<IProps, IState> {
    onButtonClick = () => {
        const { readMessages, id } = this.props;
        readMessages(id);
    }

    render() {
        const { id, name, lastMessage, date, image, className, unreadMessages } = this.props;
        const messageDate = new Date(date);

        return <div className={className}>
            <button type="button"
                aria-label={`Select contact ${name}`}
                onClick={this.onButtonClick}
            />

            <SImage />
            <SContent>
                <STitle>{name}</STitle>
                <SText>{lastMessage}</SText>
            </SContent>
            <SInfo>
                <div>{messageDate.getHours() + ':' + messageDate.getMinutes()}</div>
                {Boolean(unreadMessages) && <span>{unreadMessages}</span>}
            </SInfo>
        </div>;
    };
};

const StyledContact = styled(Contact)`
    display: flex;
    position: relative;
    align-items: middle;
    padding: 1rem;

    &:hover {
        background-color: #f6f6f6;
    }

    button {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        cursor: pointer;
        border: none;
        background: transparent;
    }
`;

const SImage = styled.div`
    display: block;
    flex: 0 0 auto;
    width: 4.7rem;
    height: 4.7rem;
    border-radius: 50%;
    overflow: hidden;

    margin-right: 1.5rem;
    background-color: #ddd;

    img {
        width: 100%;
        height: 100%;
    }
`;

const SInfo = styled.div`
    flex: 0 0 auto;
    color: #ddd;
    margin-left: 1.5rem;
    text-align: right;

    span {
        display: inline-block;
        background-color: #ddd;
        color: #fff;
        padding: 0.2rem 0.5rem;
        border-radius: 50%;
        font-size: 1.2rem;
    }
`;

const SContent = styled.div`
    flex: 1 1 auto;
    overflow: hidden;
`;

const STitle = styled.div`
    margin-bottom: 0.5rem;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const SText = styled.div`
    font-size: 1.3rem;
    color: #ddd;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export default connect((state: IState, ownProps: IPassedProps) => {
    return {
        ...state.messages.list[ownProps.id]
    };
}, (dispatch: any) => {
    return {
        readMessages: (id: string) => {
            dispatch(readContactMessages(id))
        }
    };
})(StyledContact);


