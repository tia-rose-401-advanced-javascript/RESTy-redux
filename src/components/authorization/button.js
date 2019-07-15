import React from 'react';

/**
 * Button class/component
 * @description renders a button with info being passed via props
 */
class Button extends React.Component{
  render(){
    return(
      <button onClick={this.props.onClick}>
        Headers
      </button>
    )
  }
}

export default Button;