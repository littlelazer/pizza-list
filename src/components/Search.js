import React from "react";

const formStyle = {
  backgroundColor: 'DodgerBlue',
  height: '50px',
  padding: '10px',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1em'
};

const inputStyle = {
  width: '300px',
  padding: '8px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '1em',
  padding: '6px',
  borderRadius: '4px',
  margin: '5px'
}

const Search = props => (
  <form style={formStyle}>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="search"
        id="search"
        type="text"
        placeholder="SEARCH FOR A PIZZA"
        style={inputStyle}
      />
      <button type="submit" onClick={props.handleFormSubmit} id="Filter" style={buttonStyle}>
        GO
      </button>
  </form>
);

export default Search;