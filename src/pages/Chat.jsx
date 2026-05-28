/* eslint-disable react-hooks/refs */
/* eslint-disable react-hooks/purity */
import { useEffect, useId, useRef, useState } from 'react'
import { sendMessage, subscribeToMessages } from '../services/Socket'
import ChatInput from '../components/chat/ChatInput'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const messageEndRef = useRef(null)

  const getUserId = () => {
    let id = sessionStorage.getItem('chat-user-id')

    if (!id) {
      id = `User-${Math.floor(Math.random() * 10000)}`

      sessionStorage.setItem('chat-user-id', id)
    }

    return id
  }

  const userId = useRef(getUserId())

  useEffect(() => {
    subscribeToMessages((data) =>
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...data, self: data.sender === userId.current },
      ]),
    )
  }, [])

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSend = () => {
    if (message.trim() === '') return

    const newMessage = {
      id: Date.now(),
      sender: userId.current,
      content: message,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, newMessage])

    sendMessage(newMessage)

    setMessage('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="chat-container">
      <div className="msger-header">Chat Room</div>

      <div className="msg">
        {messages?.length > 0 &&
          messages.map((msg) => {
            const isOwn = msg.sender === userId.current

            console.log('user', userId.current)
            return (
              <div
                className={`msg-bubble ${isOwn ? 'own-msg' : ''}`}
                key={msg.id}
              >
                <div className="msg-info">
                  <div className="msg-info-name">
                    {isOwn ? 'You' : msg.sender}
                  </div>
                  <div className="msg-info-time">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </div>
                </div>

                <div className="msg-text">{msg.content}</div>
              </div>
            )
          })}

        <div ref={messageEndRef} />
      </div>
      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
        handleKeyDown={handleKeyDown}
      />
    </div>
  )
}
