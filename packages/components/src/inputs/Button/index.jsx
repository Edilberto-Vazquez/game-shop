import React from "react"
import { THEME } from "../../constants/theme"

const Button = ({ type = "", variant = "", color = "", onClick, children }) => {
  const variants = new Map([
    [
      "text",
      {
        backgroundColor: "transparent",
        color: THEME[color].main,
      },
    ],
    [
      "contained",
      {
        backgroundColor: THEME[color].main,
        color: "#fff",
      },
    ],
    [
      "outlined",
      {
        backgroundColor: "transparent",
        border: `1px solid ${THEME[color].main}`,
        color: THEME[color].main,
      },
    ],
  ])
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      button-variant={variant}
      button-color={color}
      style={variants.get(variant)}
    >
      {children}
    </button>
  )
}

export default Button
