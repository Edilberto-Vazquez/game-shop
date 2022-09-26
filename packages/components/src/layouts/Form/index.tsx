import React, { useId } from "react"

type FormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  children: React.ReactNode
}

const Form = ({ onSubmit, children }: FormProps): JSX.Element => {
  const formId: string = useId()
  return (
    <form className="form" id={formId} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
