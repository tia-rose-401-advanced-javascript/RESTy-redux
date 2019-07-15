import React from 'react';

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