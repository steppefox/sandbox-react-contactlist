import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../modules/index';
import { IItem } from '../modules/messages';

interface IPassedProps {
    id: string,
    className?: string
};

export interface IProps extends IItem , IPassedProps{};
export interface IState { };

export class Contact extends React.Component<IProps, IState> {
    render() {
        const { id, name, date, image, className, unreadMessages } = this.props;
        const messageDate = new Date(date);

        return <div className={className}>
            <SImage />
            <STitle>{name}</STitle>
            <SInfo>
                <div>{messageDate.getHours() + ':' + messageDate.getMinutes()}</div>
                {Boolean(unreadMessages) && <span>{unreadMessages}</span>}
            </SInfo>
        </div>;
    };
};

const StyledContact = styled(Contact)`
    display: flex;
    align-items: middle;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #f6f6f6;
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

const STitle = styled.div`
    flex: 1 1 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export default connect((state: IState, ownProps: IPassedProps) => {
    return {
        ...state.messages.list[ownProps.id]
    };
})(StyledContact);


