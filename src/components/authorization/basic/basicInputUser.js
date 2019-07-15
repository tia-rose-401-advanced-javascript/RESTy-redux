import React from 'react';

class BasicInputUser extends React.Component{
  render(){
    return(
      <input
          onChange={this.props.handleChange}
          name="username"
          placeholder="Username"
          value={this.props.username}
        />
    )
  }
}

export default BasicInputUser;