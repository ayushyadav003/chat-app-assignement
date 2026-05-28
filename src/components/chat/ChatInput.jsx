import React from 'react'

function ChatInput({message, setMessage, handleSend, handleKeyDown}) {
  return (
    <div className="input-area">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default ChatInput
