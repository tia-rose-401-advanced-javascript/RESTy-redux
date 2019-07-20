// import React, { useContext } from "react";
// import { RestyContext } from "../../context/restyContext";
//   const state = useContext(RestyContext);

import React from 'react';


/**
 * Label class/component
 * @description general label for all CRUD operations. All info is passed down via props
 */

class Label extends React.Component{
  render(){
    return(
      <label>
        <input
          type="radio"
          name="method"
          checked={this.props.checked === this.props.value ? true : false}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <span>{this.props.value}</span>
      </label>
    )
  }
}



// const Label = () => {
//   const state = useContext(RestyContext);
//   return(
//     <label>
//       <input
//         type="radio"
//         name="method"
//         checked={state.method === state.value ? true : false}
//         onChange={state.handleChange}
//       />

//       {/* Issue I am having is to get the span to render. value is not in the state of RestyContext so state.value will not work */}
//       <span>{state.value}</span>
//     </label>
//   )
// }

export default Label;

