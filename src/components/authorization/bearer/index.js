import React from 'react';

/**
 * Bearer class/component
 * @description input field with info being passed via props
 */

class Bearer extends React.Component{
  render(){
    return(
      <input
      onChange={this.props.onChange}
      type="text"
      className="wide"
      name="token"
      placeholder="Token"
      value={this.props.value}
    />
    )
  }
}

export default Bearer;