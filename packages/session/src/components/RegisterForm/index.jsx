import React, { useState } from "react"
import useSignup from "../../api/useSignup"
import Link from "next/link"

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

  const handleSubmit = (e) => {
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

  console.log(data)

  return (
    <div className="session-section_form">
      <form id="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>Register your email</span>
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) => handleInputChange(e, setEmail)}
          />
        </label>
        <label htmlFor="user-name">
          <span>Register your user name</span>
          <input
            required
            type="text"
            placeholder="User name"
            name="user-name"
            id="user-name"
            onChange={(e) => handleInputChange(e, setUserName)}
          />
        </label>
        <label htmlFor="country">
          <span>Enter your country</span>
          <input
            required
            type="text"
            placeholder="Country"
            name="country"
            id="country"
            onChange={(e) => handleInputChange(e, setCountryId)}
          />
        </label>
        <label htmlFor="password-user">
          <span>Enter your password</span>
          <input
            required
            type="password"
            placeholder="Password"
            name="password-user"
            id="password-user"
            onChange={(e) => handleInputChange(e, setPassword)}
          />
        </label>
        <label htmlFor="password-user-confirm">
          <span>Confirm your password</span>
          <input
            required
            type="password"
            placeholder="Password"
            name="password-user-confirm"
            id="password-user-confirm"
            onChange={(e) => handleInputChange(e, setPasswordToCompare)}
          />
        </label>
        <button type="submit" className="primary-btn">
          Register
        </button>
      </form>
      <span>Do you have an account?</span>
      <button
        className="secondary-btn"
        onClick={(e) => (window.location.href = "/login")}
      >
        Login
      </button>
      <Link href={"/"}>
        <a>
          <span>I forget my password</span>
        </a>
      </Link>
    </div>
  )
}

export default RegisterForm
