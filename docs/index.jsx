import React from "react"
import ReactDOM from "react-dom"
import styles from "./static/app.css"


class App extends React.Component {

  render() {

    return (
      <div>
        The Data of DotA2!
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
)
