import React from 'react';
import SockJsClient from 'react-stomp';

class ChatArea extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  onConnected() {
    console.log("Connected!!")
  }

  onMessageReceived = (msg) => {
    console.log("received ", msg);
    const concat = this.state.message.concat(msg).concat("\n");
    this.setState({ message: concat });
  }

  render() {
    let url = "";
    switch (process.env.NODE_ENV) {
      case 'production':
        url = 'http://193.47.69.248:8100/ws-message';
        break;
      case 'development':
      default:
        url = 'http://localhost:8100/ws-message';
    }


    return (
      <div className='chatArea'>
        <SockJsClient
          url={url}
          topics={['/topic/message']}
          onConnect={this.onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={msg => this.onMessageReceived(msg)}
          debug={false}
        />
        <div>
          <p>{this.state.message}</p>
        </div>

      </div>
    );
  }

}

export default ChatArea;
