import * as React from 'react';
import styled from 'styled-components';
import Contacts from './contacts';
import Toolbar from './toolbar';

export interface IProps {
    className?: string
}
export interface IState {}
export class App extends React.Component<IProps, IState> {
    render() {
        return <div className={this.props.className}>
            <SContainer>
                <Contacts />
                <Toolbar />
            </SContainer>
        </div>;
    }
}

const SContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
`;

export default styled(App)`
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
`;
