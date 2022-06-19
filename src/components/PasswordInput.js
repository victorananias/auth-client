import React from 'react'
import Input from './Input'

function PasswordInput ({ value, required, name, onChange }) {
  return (
    <Input
      type="password"
      value={value}
      required={required}
      name={name}
      onChange={onChange}
    />
  )
}

export default PasswordInput