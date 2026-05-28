import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div class="connect-container">
      <p class="connect-text">Click to connect to the global chat</p>
      <button class="connect-btn" onClick={() => navigate('/chat')}>
        Connect Now
      </button>
    </div>
  )
}
