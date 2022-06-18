import React, { useState } from 'react'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsernameChange = (username) => setUsername(username)
  const handlePasswordChange = (password) => setPassword(password)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ username, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="Username" required={true} value={username} onChange={handleUsernameChange} />
      <PasswordInput name="Password" required={true} value={password} onChange={handlePasswordChange} />
      <button type="submit">submit</button>
    </form>

  )
}

export default LoginForm