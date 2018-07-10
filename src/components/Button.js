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
        {
        // Here you're executing an anonymous function just to call a function.
        // Instead of doing that, you can just call the function that is in props.
        // It might be a good idea to name it something more descriptive than
        // 'function' though. 'onClick' would work fine
        }
        {props.name} 
        
    </button>
);

export default Button;