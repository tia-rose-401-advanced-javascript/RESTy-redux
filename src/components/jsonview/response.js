import React from 'react';
import ReactJson from 'react-json-view';


/**
 * JsonResponse class/component
 * @description uses the react-json-view component to render JSON responses
 */

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