import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../modules/index';
import { IItem } from '../modules/messages';
import Contact from './contact';

export interface IProps {
    className?: string,
    sortedIds: Array<IItem["id"]>
};

export interface IState {}
export class Contacts extends React.Component<IProps, IState> {
    render() {
        const { className, sortedIds } = this.props;
        console.log('Contactssssss render');

        return <div className={className}>
            {sortedIds.map((key) => {
                return <Contact key={key} id={key} />
            })}
        </div>;
    };
}

const StyledContacts = styled(Contacts)`
    width: 25%;
    min-width: 20rem;
    max-width: 31.5rem;
    padding-top: 1rem;
    background: #fff;
    border-right: 0.1rem solid #ddd;
`;

export default connect((state: IState, ownProps) => {
    return {
        ...ownProps,
        sortedIds: state.messages.sorted
    };
})(StyledContacts);
