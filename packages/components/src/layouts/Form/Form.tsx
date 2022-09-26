import React, { useId } from "react"
import "./_form.scss"

interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const Form = ({ onSubmit, children }: FormProps): JSX.Element => {
  const formId: string = useId()
  return (
    <form className="form" id={formId} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
