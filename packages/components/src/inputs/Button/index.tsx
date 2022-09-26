import React from "react"
import { THEME } from "../../constants/theme"

type ButtonProps = {
  type: "button" | "submit" | "reset"
  variant: "contained" | "outlined"
  color: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button = ({ type, variant, color, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
      button-variant={variant}
      button-color={color}
    >
      {children}
    </button>
  )
}

export default Button
