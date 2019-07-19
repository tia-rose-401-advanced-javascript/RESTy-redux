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

export default Label;

