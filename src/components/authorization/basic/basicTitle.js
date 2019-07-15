import React from 'react';
import BasicInputUser from './basicInputUser';
import BasicInputPass from './basicInputPass';

class BasicTitle extends React.Component{
  render(){
    return(
      <div className={'visible-' + this.state.headersVisible}>
        <h2>Basic Authorization</h2>
        {/* <input
          onChange={this.handleChange}
          name="username"
          placeholder="Username"
          value={this.state.username}
        /> */}

        <BasicInputUser onChange={this.props.onChange} value={this.props.value} />
        <BasicInputPass onChange={this.props.onChange} value={this.props.value} />
        {/* Component */}
        {/* <input
          onChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
        /> */}
    </div>
    )
  }
}

export default BasicTitle;