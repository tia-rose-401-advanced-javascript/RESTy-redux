import React from 'react';

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