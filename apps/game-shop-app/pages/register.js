import React from "react"
import Head from "next/head"
import { RegisterForm, SessionDiv } from "@game-shop-ui/login-card"

export default function register() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1>Game Shop</h1>
      <SessionDiv namePage="Register">
        <RegisterForm />
      </SessionDiv>
    </>
  )
}
