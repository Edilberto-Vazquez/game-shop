import React from "react"
import Link from "next/link"

const LoginForm = () => {
  return (
    <div className="login-section_form">
      <form action="/" id="login-form" method="POST">
        <label htmlFor="email-user">
          <span>Login with your email</span>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password-user">
          <span>Password</span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </label>
        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
      <button className="secondary-btn">Register</button>
      <Link href={"/"}>
        <a>I forget my password</a>
      </Link>
    </div>
  )
}

export default LoginForm
