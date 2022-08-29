import React from "react"
import LoginForm from "../LoginForm"
import "../../styles/loginDiv.scss"

const LoginDiv = () => {
  return (
    <section className="login-section">
      <h2>Login Session</h2>
      <div className="login-section_information">
        <LoginForm />
        <div>
          <p>The best way to play your games.</p>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

export default LoginDiv
