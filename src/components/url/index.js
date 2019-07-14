import React from 'react';

class Url extends React.Component{
  render(){
    return(
        <input
          type="text"
          className="wide"
          name="url"
          placeholder="URL"
          value={this.props.value}
          onChange={this.props.onChange}
        />
    )
  }
}

export default Url;

