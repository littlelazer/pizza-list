import React from "react";

const buttonStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1em',
    padding: '6px',
    borderRadius: '4px',
    margin: '10px',
    borderColor: 'DodgerBlue',
  }

const Button = props => (
    <button onClick={() => props.function()} style={buttonStyle}> 
        {props.name} 
    </button>
);

export default Button;