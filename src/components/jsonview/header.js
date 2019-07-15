import React from 'react';
import ReactJson from 'react-json-view';

class JsonHeader extends React.Component{
  render(){
    return(
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={this.props.src}
      />
    )
  }
}

export default JsonHeader;