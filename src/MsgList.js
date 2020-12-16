import React, { Component } from "react";

class MsgList extends Component {
  render() {
    const { user, messages } = this.props;
    return (
      <div className="MsgList">
        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
              message.username === user.username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MsgList;
