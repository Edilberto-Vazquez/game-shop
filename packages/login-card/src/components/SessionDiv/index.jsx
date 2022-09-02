import React from "react"
import "../../styles/SessionDiv.scss"

const SessionDiv = ({ namePage, children }) => {
  return (
    <section className="session-section">
      <h2>{namePage}</h2>
      <div className="session-section_information">
        {children}
        <div className="information">
          <p>The best way to play your games.</p>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

export default SessionDiv
