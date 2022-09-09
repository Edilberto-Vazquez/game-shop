import React, { useId } from "react"

const Form = ({ onSubmit, children }) => {
  const formId = useId()
  return (
    <form className="form" id={formId} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
