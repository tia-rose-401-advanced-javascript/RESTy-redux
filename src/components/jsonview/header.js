import React from 'react';
// import React, { useContext } from "react";
import ReactJson from "react-json-view";
// import { RestyContext } from "../../context/restyContext";

/**
 * JsonHeader class/component
 * @description uses the react-json-view component to render JSON headers
 */

class JsonHeader extends React.Component {
  render() {
    return (
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={this.props.src}
      />
    );
  }
}

// const JsonHeader = () => {
//   const state = useContext(RestyContext);
//   return (
//     <ReactJson
//       name="Headers"
//       enableClipboard={false}
//       collapsed={true}
//       src={state.header}
//     />
//   );
// };

export default JsonHeader;
