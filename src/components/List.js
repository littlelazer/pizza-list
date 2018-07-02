import React from 'react';

const listStyle = {
    fontSize: '1.5em'
};

const List = props => {
    return (
        <p style={listStyle}>{props.name}</p>
    );
}

export default List;