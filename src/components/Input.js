import React from 'react'

function Input (props) {
  const name = props.name
  const value = props.value
  const required = props.required
  const type = props.type
  const handleChange = (event) => props.onChange(event.target.value)
  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          name={name}
          required={required}
          defaultValue={value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Input