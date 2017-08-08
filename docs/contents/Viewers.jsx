import React from "react"
// import BarGraph from "replot-bar"
import styles from "./Block.css"


class Viewers extends React.Component {

  render() {
    const colorPalette = [
      "#500700", "#193858", "#0b7640", "#51385f",
      "#d8bc32", "#8c1f0b", "#235160"
    ]

          // <BarGraph
          //   width="100%"
          //   data={data}
          //   />

    return (
      <div className={styles.container}>
        <div className={styles.leftBlock}>

        </div>
        <div className={styles.rightBlock}>
          Something about viewership here
        </div>
      </div>
    )
  }
}

export default Viewers
