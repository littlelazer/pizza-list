import React from 'react';

const headerStyle = {
    backgroundColor: '#222',
    height: '200px',
    padding: '10px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '2em'
};

const Header = () => (
    <div style={headerStyle}>
        <h1>Pizza List</h1>
    </div>
);

export default Header;