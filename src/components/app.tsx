import * as React from 'react';
import styled from 'styled-components';
import Contacts from './contacts';

export interface IProps {
    className?: string
}
export interface IState {}
export class App extends React.Component<IProps, IState> {
    render() {
        return <div className={this.props.className}>
            <Contacts />
        </div>;
    }
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default styled(App)`
    width: 128rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
`;
