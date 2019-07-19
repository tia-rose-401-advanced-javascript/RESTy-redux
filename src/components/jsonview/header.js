import React from 'react';
import ReactJson from 'react-json-view';

/**
 * JsonHeader function component
 * @description uses the react-json-view component to render JSON headers
 */

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

// const JsonHeader = () => {
//   return(
//     <ReactJson
//       name="Headers"
//       enableClipboard={false}
//       collapsed={true}
//       src={this.props.src}
//     />
//   )
// }

export default JsonHeader;