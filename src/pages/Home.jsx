import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      This is the home page
      <button onClick={() => navigate('/chat')}>Go to Chat</button>
    </div>
  )
}
