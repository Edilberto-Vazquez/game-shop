import React, { useId } from "react"

type TextFieldProps = {
  title: string | null | undefined
  placeholder: string
  type: string
  required: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
} & typeof defaultProps

const defaultProps = {
  title: undefined,
}

const TextField = ({
  title,
  placeholder,
  type,
  required,
  onChange,
}: TextFieldProps): JSX.Element => {
  const inputId: string = useId()
  return (
    <label className="text-box" htmlFor={inputId}>
      {title && <span className="text-box__label">{title}</span>}
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

TextField.defaultProps = defaultProps

export default TextField
