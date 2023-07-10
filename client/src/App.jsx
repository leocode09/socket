import { useEffect, useState } from 'react'
import './App.css'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

function App() {
  const [message, setMessage] = useState('');
  const [MailBox, setMailBox] = useState('');
  const emitter = () => {
    socket.emit('emit_message', {message: message})    
  }

  useEffect(() => {
    socket.on('receive_message', data => {
      setMailBox(data.message)
    })
  }, [socket])

  return (
    <>
      <h1>LEO messager</h1>
      <input
       placeholder='Message >>>' 
       onChange={e => {setMessage(e.target.value)}}
      />
      <button onClick={emitter}>Emit</button>
			<h3>Mail Box:</h3>
			{MailBox}
    </>
  )
}

export default App
