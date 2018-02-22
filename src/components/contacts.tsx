import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IState as IStoreState } from '../modules/index';
import { IItem } from '../modules/messages';
import Contact from './contact';
import { List } from 'react-virtualized/dist/es/List';
import { AutoSizer } from 'react-virtualized/dist/es/AutoSizer';

interface IProps {
    className?: string,
    sortedIds: Array<IItem["id"]>
};

function rowRenderer(sortedIds: IProps["sortedIds"], opts: { index: number, style: object }) {
    const { index, style } = opts;
    const key = sortedIds[index];
    return <div key={key} style={style}>
        <Contact id={key} />
    </div>;
};

interface IState {
    height: number
};

export class Contacts extends React.Component<IProps, IState> {
    render() {
        const { className, sortedIds } = this.props;

        return <div className={className}>
            <AutoSizer>
                {({ width, height }) => {
                    return <List
                        height={height}
                        width={width}
                        rowCount={sortedIds.length}
                        rowHeight={67}
                        rowRenderer={rowRenderer.bind(null, sortedIds)}
                    />
                }}
            </AutoSizer>
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

export default connect((state: IStoreState, ownProps) => {
    return {
        ...ownProps,
        sortedIds: state.messages.sorted
    };
})(StyledContacts);
