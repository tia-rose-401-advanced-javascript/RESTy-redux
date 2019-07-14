import React from 'react';

class Url extends React.Component{
  render(){
    return(
        <input
          type="text"
          className="wide"
          name="url"
          placeholder="URL"
          value={this.state.url}
          onChange={this.handleChange}
        />
    )
  }
}

export default Url;

