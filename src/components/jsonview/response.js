import React, { useContext } from "react";
import ReactJson from "react-json-view";
import { RestyContext } from "../../context/restyContext";

/**
 * JsonResponse class/component
 * @description uses the react-json-view component to render JSON responses
 */

// class JsonResponse extends React.Component {
//   render() {
//     return (
//       <ReactJson
//         name="Response"
//         enableClipboard={false}
//         collapsed={false}
//         src={this.props.src}
//       />
//     );
//   }
// }

const JsonResponse = () => {
  const state = useContext(RestyContext);
  console.log("in json response", state);
  return (
    <ReactJson
      name="Response"
      enableClipboard={false}
      collapsed={false}
      src={state.body}
    />
  );
};

export default JsonResponse;
