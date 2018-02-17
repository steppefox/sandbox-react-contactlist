import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../modules/index';
import { IItem } from '../modules/messages';

interface IPassedProps {
    id: string
}

export interface IProps extends IItem {
    id: string
};

export interface IState { }
export class Contact extends React.PureComponent<IProps, IState> {
    render() {
        console.log('Contact, rerender');
        const { id, name } = this.props;

        return <div>
            <div key={id}>
                {name}
            </div>
        </div>;
    };
}

export default connect((state: IState, ownProps: IPassedProps) => {
    return {
        ...state.messages.list[ownProps.id]
    };
})(Contact);


