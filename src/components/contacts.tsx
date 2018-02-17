import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../modules/index';
import { IIndexedItems } from '../modules/messages';
import Contact from './contact';

export interface IProps {
    messages: IIndexedItems
};

export interface IState {}
export class Contacts extends React.Component<IProps, IState> {
    render() {
        const { messages } = this.props;
        console.log('Contactssssss render');

        return <div>
            {Object.keys(messages).map((key) => {
                return <Contact key={key} id={key} />
            })}
        </div>;
    };
}

export default connect((state: IState, ownProps) => {
    return {
        messages: state.messages.list
    };
})(Contacts);


