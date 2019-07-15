import React from 'react';

class BasicInputUser extends React.Component{
  render(){
    return(
      <input
          onChange={this.props.onChange}
          name="username"
          placeholder="Username"
          value={this.props.value}
        />
    )
  }
}

export default BasicInputUser;