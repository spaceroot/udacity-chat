import React, { Component } from "react";

class InputMsg extends Component {
  state = {
    text: ""
  }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    if(this.state.text !== ""){
      return false;
    }
    return true;
  };

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onNewMsg(this.state.text);
    this.setState({text: ""});
  }
  
  render() {
    return (
      <div className="InputMsg">
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.text}                     onChange={(e) => this.handleChange(e)}/>
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputMsg;
