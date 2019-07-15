import React from 'react';

class BasicInputPass extends React.Component{
  render(){
    return(
      <input
      onChange={this.handleChange}
      name="password"
      type="password"
      placeholder="Password"
      value={this.state.password}
    />
    )
  }
}

export default BasicInputPass;