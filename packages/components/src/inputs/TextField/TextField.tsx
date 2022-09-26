import React, { useId } from "react"
import "./_text-field.scss"

interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string | null | undefined
}

const TextField = ({
  title = "",
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

export default TextField
