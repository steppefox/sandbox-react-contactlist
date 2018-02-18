import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../modules/index';
import { IItem } from '../modules/messages';

interface IPassedProps {
    id: string,
    className?: string
}

export interface IProps extends IItem , IPassedProps{

};

export interface IState { }
export class Contact extends React.PureComponent<IProps, IState> {
    render() {
        console.log('Contact, rerender');
        const { id, name, image, className } = this.props;

        return <div className={className}>
            <SImage>
            {/* <img src={image} width="47" height="47" /> */}
            </SImage>
            <STitle>{name}</STitle>
        </div>;
    };
}

const StyledContact = styled(Contact)`
    display: flex;
    align-items: middle;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #eee;
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

const STitle = styled.div`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export default connect((state: IState, ownProps: IPassedProps) => {
    return {
        ...state.messages.list[ownProps.id]
    };
})(StyledContact);


