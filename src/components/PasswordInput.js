import React from 'react'
import Input from './Input'

function PasswordInput (props) {
  const value = props.value
  const required = props.required
  const name = props.name
  const handleChange = props.onChange
  return (
    <Input
      type="password"
      value={value}
      required={required}
      name={name}
      onChange={handleChange}
    />
  )
}

export default PasswordInput