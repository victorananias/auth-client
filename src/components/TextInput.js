import React from 'react'
import Input from './Input'

function TextInput ({ value, required, name, onChange }) {
  return (
    <Input
      type="text"
      value={value}
      required={required}
      name={name}
      onChange={onChange}
    />
  )
}

export default TextInput