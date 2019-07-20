// import React from 'react';

import React, { useContext } from "react";
import { RestyContext } from "../../../context/restyContext";
// const state = useContext(RestyContext);

/**
 * Bearer class/component
 * @description input field with info being passed via props
 */

// class Bearer extends React.Component{
//   render(){
//     return(
//       <input
//       onChange={this.props.onChange}
//       type="text"
//       className="wide"
//       name="token"
//       placeholder="Token"
//       value={this.props.value}
//     />
//     )
//   }
// }

const Bearer = () => {
  const state = useContext(RestyContext);
  return(
    <input
          onChange={state.onChange}
          type="text"
          className="wide"
          name="token"
          placeholder="Token"
          value={state.value}
        />

  )
}

export default Bearer;