import React from 'react'

function Input ({ name, value, required, type, onChange }) {
  const handleChange = (event) => onChange(event.target.value)
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