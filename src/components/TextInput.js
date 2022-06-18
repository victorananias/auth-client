import React from 'react'
import Input from './Input'

function TextInput (props) {
  const value = props.value
  const type = props.type
  const required = props.required
  const name = props.name
  const handleChange = props.onChange
  return (
    <Input
      value={value}
      type={type}
      required={required}
      name={name}
      onChange={handleChange}
    />
  )
}

export default TextInput