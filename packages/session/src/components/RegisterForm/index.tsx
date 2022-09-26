import React, { useState } from "react"
import useSignup from "../../api/useSignup"
import { Paper, Form, TextField, Button } from "@game-shop-ui/components"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    countryId: "",
    password: "",
  })
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [countryId, setCountryId] = useState("")
  const [password, setPassword] = useState("")
  const [passwordToCompare, setPasswordToCompare] = useState("")

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

  const handleInputChange = (e, setFunction) => {
    setFunction(e.target.value)
  }

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something happend</span>
  }

  return (
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
        placeholder="Repeat password"
        type="password"
        required
        onChange={(e) => handleInputChange(e, setPasswordToCompare)}
      />
      <Button type="submit" variant="contained" color="secondary">
        Register
      </Button>
      <Button type="button" variant="outlined" color="primary">
        Login into your account
      </Button>
    </Form>
  )
}

export default RegisterForm
