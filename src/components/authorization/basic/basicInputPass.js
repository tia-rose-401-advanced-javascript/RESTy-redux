import React from 'react';

class BasicInputPass extends React.Component{
  render(){
    return(
      <input
      onChange={this.props.onChange}
      name="password"
      type="password"
      placeholder="Password"
      value={this.props.value}
    />
    )
  }
}

export default BasicInputPass;