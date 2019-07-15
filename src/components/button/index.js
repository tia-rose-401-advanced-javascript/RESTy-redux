import React from 'react';

/**
 * Button class/component
 * @description renders a label tag that houses the Go button
 */

class Button extends React.Component{
  render(){
    return(
      <label>
        <button type="submit">Go!</button>
      </label>
    )
  }
}

export default Button;