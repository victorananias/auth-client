import React, { useState } from 'react'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

function LoginForm ({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleForgotPassword = () => {
    console.log('forgot password')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ username, password })
  }
  return (
    <div>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <TextInput name="Username" required={true} value={username} onChange={setUsername} />
        <PasswordInput name="Password" required={true} value={password} onChange={setPassword} />
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <a onClick={handleForgotPassword}>Forgot your password?</a>
        </div>
        <button className="button is-success is-fullwidth">Login</button>
      </form>
    </div>
  )
}

export default LoginForm