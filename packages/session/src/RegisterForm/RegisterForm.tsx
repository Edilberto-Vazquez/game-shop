import React, { useState } from "react"
import useSignup from "../api/useSignup"
import { Form, TextField, Button, AppTitle } from "@game-shop-ui/components"
import "./_register-form.scss"

type FormData = {
  userName: string
  email: string
  countryId: string
  password: string
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    countryId: "",
    password: "",
  })
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [countryId, setCountryId] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordToCompare, setPasswordToCompare] = useState<string>("")

  const { loading, error, data, setSubmit } = useSignup(formData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== passwordToCompare) {
      return
    }
    setFormData({
      userName,
      email,
      countryId,
      password,
    })
    setSubmit(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFunction(e.target.value)
  }

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something happend</span>
  }

  return (
    <div className="register-form">
      <AppTitle />
      <Form onSubmit={handleSubmit}>
        <TextField
          placeholder="Email"
          type="email"
          required
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <TextField
          placeholder="User name"
          type="text"
          required
          onChange={(e) => handleInputChange(e, setUserName)}
        />
        <TextField
          placeholder="Country"
          type="text"
          required
          onChange={(e) => handleInputChange(e, setCountryId)}
        />
        <TextField
          placeholder="Password"
          type="password"
          required
          onChange={(e) => handleInputChange(e, setPassword)}
        />
        <TextField
          placeholder="Repeat your password"
          type="password"
          required
          onChange={(e) => handleInputChange(e, setPasswordToCompare)}
        />
        <Button type="submit" variant="contained" color="secondary">
          Register
        </Button>
        <div className="register-form-socmed">
          <span className="register-social-media__text">
            Or also register with:
          </span>
          <div className="register-form-socmed-icons">
            <span className="register-form-socmed-icons__item" />
            <span className="register-form-socmed-icons__item" />
          </div>
        </div>
        <div className="register-form-login">
          <span className="register-form-login__text">
            You already have an account?
          </span>
          <Button type="button" variant="outlined" color="primary">
            Login
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
