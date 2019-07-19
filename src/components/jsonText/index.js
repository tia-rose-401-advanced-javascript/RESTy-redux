import React from 'react';

/**
 * JsonText class/component
 * @description text area with crucial behaviour being passed down via props
 */

class JsonText extends React.Component{
  render(){
    return(
      <textarea
        placeholder="Raw JSON Body"
        name="requestBody"
        onChange={this.props.onChange}
        value={this.props.value}
        disabled={
          // this.state.method.match(/GET|get|DELETE|delete/) ? true : false
          this.props.disabled
        }
      />
    )
  }
}

export default JsonText;