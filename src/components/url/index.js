// import React from 'react';

import React, { useContext } from "react";
import { RestyContext } from "../../context/restyContext";


// class Url extends React.Component{
//   render(){
//     return(
//         <input
//           type="text"
//           className="wide"
//           name="url"
//           placeholder="URL"
//           value={this.props.value}
//           onChange={this.props.onChange}
//         />
//     )
//   }
// }

const Url = () => {
  const state = useContext(RestyContext);
  return(
    <input
      type="text"
      className="wide"
      name="url"
      placeholder="URL"
      value={state.url}
      onChange={state.handleChange}
    />
  )
}

export default Url;

