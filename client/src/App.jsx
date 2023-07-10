import './App.css'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')

function App() {
  const emitter = () => {
    socket.emit('emit_message', {message: 'Hello'})    
  }
  return (
    <>
      <h1>LEO messager</h1>
      <input placeholder='Message >>>' />
      <button onClick={emitter}>Emit</button>
    </>
  )
}

export default App
