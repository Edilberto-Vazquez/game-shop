import React from "react"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const themeInitializer = `(${setInitialColorMode.toString()}())`

function setInitialColorMode() {
  let theme: string = ""
  const themes = new Map<boolean, string>([
    [true, "dark"],
    [false, "light"],
  ])
  const storedTheme = window.localStorage.getItem("color-mode")
  if (typeof storedTheme === "string") {
    theme = storedTheme
  } else {
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)")
    window.localStorage.setItem("color-mode", themes.get(matches))
    theme = themes.get(matches)
  }
  document.documentElement.setAttribute("color-mode", theme)
}
