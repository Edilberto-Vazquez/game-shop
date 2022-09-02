import React from "react"
import Link from "next/link"

const RegisterForm = () => {
  return (
    <div className="session-section_form">
      <form action="/" id="register-form" method="POST">
        <label htmlFor="email1-user">
          <span>Register your email</span>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email1"
          />
        </label>
        <label htmlFor="email2-user">
          <span>Confirm your email</span>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email2"
          />
        </label>
        <label htmlFor="password-user">
          <span>Enter your new password</span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
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
