import React, { useState } from 'react';

function ChatRoom() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== '') {
      setChatLog([...chatLog, message]);
      setMessage('');
    }
  };

  return (
    <div id='chat-wrapper'>
      <h1 id="chat-title">도봉이와의 대화방</h1>
      <div id="chat-container">
        <div id="chat-box">
          {chatLog.map((msg, index) => <p key={index}>{msg}</p>)}
        </div>
        <div id="chat-prompt">
          <form onSubmit={handleSubmit}>
            <input type="text" id="user-input" placeholder="메세지를 입력하세요." value={message} onChange={handleInputChange} />
            <button type="submit" id="send-button">보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
