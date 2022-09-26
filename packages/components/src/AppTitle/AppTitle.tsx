import React from "react"
import "./_app-title.scss"

type AppTitleProps = {}

const AppTitle = (): JSX.Element => {
  return (
    <div className="page-title">
      <span className="page-title__icon" />
      <h1 className="page-title__text">GAME SHOP</h1>
    </div>
  )
}

export default AppTitle
