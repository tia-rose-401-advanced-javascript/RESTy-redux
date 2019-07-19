import React from 'react';

/**
 * Basic Input Password class/component
 * @description input field for password with info being passed via props
 */

const BasicInputPass = () => {
  return(
    <input
    onChange={this.props.onChange}
    name="password"
    type="password"
    placeholder="Password"
    value={this.props.value}
  />
  )

}

export default BasicInputPass;