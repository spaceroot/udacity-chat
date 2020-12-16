import React, { Component } from "react";
import MsgList from "./MsgList";
import InputMsg from "./InputMsg";

class ChatWindow extends Component {
  addMsg = (text) => {
    const msg = {
      username: this.props.user.username,
      text: text
    }
    this.props.addMsg(msg)
  }
  
  render() {
    const { user, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MsgList user={user} messages={messages} />
        <InputMsg onNewMsg={this.addMsg} />
      </div>
    );
  }
}

export default ChatWindow;
