import React from "react"
import "./_button.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "contained" | "outlined"
  color: string
}

const Button = ({ type, variant, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
