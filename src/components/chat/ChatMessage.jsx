export default function ChatMessage({ msg, isOwn }) {
  return (
    <div className={`msg-bubble ${isOwn ? 'own-msg' : ''}`} key={msg.id}>
      <div className="msg-info">
        <div className="msg-info-name">{isOwn ? 'You' : msg.sender}</div>
        <div className="msg-info-time">
          {new Date(msg.timestamp).toLocaleTimeString()}
        </div>
      </div>

      <div className="msg-text">{msg.content}</div>
    </div>
  )
}
