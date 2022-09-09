import React, { useId } from "react"

const TextField = ({
  title = "",
  placeholder = "",
  type = "",
  required = false,
  onChange,
}) => {
  const inputId = useId()
  return (
    <label className="text-box" htmlFor={inputId}>
      {title !== "" && <span className="text-box__label">{title}</span>}
      <input
        className="text-box__input"
        required={required}
        type={type}
        placeholder={placeholder}
        name="email"
        id={inputId}
        onChange={onChange}
      />
    </label>
  )
}

export default TextField
