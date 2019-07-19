import React from 'react';

/**
 * Basic Input Username function component
 * @description input field for username with info being passed via props
 */

class BasicInputUser extends React.Component{
  render(){
    return(
      <input
          onChange={this.props.onChange}
          name="username"
          placeholder="Username"
          value={this.props.value}
        />
    )
  }
}

// const BasicInputUser = () => {
//   return(
//     <input
//         onChange={this.props.onChange}
//         name="username"
//         placeholder="Username"
//         value={this.props.value}
//       />
//   )
// }

export default BasicInputUser;