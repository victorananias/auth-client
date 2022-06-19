import LoginForm from 'components/LoginForm'
import React from 'react'
import { login } from 'services/api'


function Login () {
  const handleSubmit = async ({ username, password }) => {
    try {
      const result = await login(username, password)
      console.log(result)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="flex-container flex-center">
      <div style={{ width: '30%' }}>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div >
  )
}

export default Login