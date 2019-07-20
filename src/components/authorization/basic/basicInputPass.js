// import React from 'react';

import React, { useContext } from "react";
import { RestyContext } from "../../../context/restyContext";
// const state = useContext(RestyContext);

/**
 * Basic Input Password class/component
 * @description input field for password with info being passed via props
 */

// class BasicInputPass extends React.Component{
//   render(){
//     return(
//       <input
//       onChange={this.props.onChange}
//       name="password"
//       type="password"
//       placeholder="Password"
//       value={this.props.value}
//     />
//     )
//   }
// }

const BasicInputPass = () => {
  const state = useContext(RestyContext);
  return(
    <input
    onChange={state.onChange}
    name="password"
    type="password"
    placeholder="Password"
    value={state.value}
  />
  )
}

export default BasicInputPass;