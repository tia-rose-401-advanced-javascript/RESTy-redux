import React from 'react';
import ReactJson from 'react-json-view';

class JsonResponse extends React.Component{
  render(){
    return(
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={this.props.src}
      />
    )
  }
}

export default JsonResponse;