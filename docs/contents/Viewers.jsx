import React from "react"
import BarGraph from "replot-bar"
import styles from "./Block.css"


class Viewers extends React.Component {

  render() {
    const data = [
      {game: "DotA TI", year: "2012", viewer_count: 570000},
      {game: "DotA TI", year: "2013", viewer_count: 1000000},
      {game: "DotA TI", year: "2014", viewer_count: 2000000},
      {game: "DotA TI", year: "2015", viewer_count: 4600000},
      {game: "DotA TI", year: "2016", viewer_count: 5700000},
      {game: "LoL WC", year: "2012", viewer_count: 1100000},
      {game: "LoL WC", year: "2013", viewer_count: 8500000},
      {game: "LoL WC", year: "2014", viewer_count: 11000000},
      {game: "LoL WC", year: "2015", viewer_count: 14000000},
      {game: "LoL WC", year: "2016", viewer_count: 14700000},
      {game: "Super Bowl", year: "2012", viewer_count: 111346000},
      {game: "Super Bowl", year: "2013", viewer_count: 108690000},
      {game: "Super Bowl", year: "2014", viewer_count: 112200000},
      {game: "Super Bowl", year: "2015", viewer_count: 114400000},
      {game: "Super Bowl", year: "2016", viewer_count: 111860000},
      {game: "Masters", year: "2012", viewer_count: 13500000},
      {game: "Masters", year: "2013", viewer_count: 14700000},
      {game: "Masters", year: "2014", viewer_count: 11100000},
      {game: "Masters", year: "2015", viewer_count: 14100000},
      {game: "Masters", year: "2016", viewer_count: 13900000}
    ]
    const colorPalette = [
      "#500700", "#193858", "#0b7640", "#51385f",
      "#d8bc32", "#8c1f0b", "#235160"
    ]

    return (
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <BarGraph
            width="100%"
            data={data}
            xKey="year"
            yKey="viewer_count"
            groupKey="game"
            graphTitle="Bar Graph of Viewership vs Game by Year"
            xTitle="Game"
            yTitle="Viewers"
            color={colorPalette}
            axisStyle={{
              axisColor: "#979797",
              labelColor: "#979797",
              titleColor: "#979797",
              gridColor: "#DDDDDD",
              lineWidth: 2,
              lineOpacity: 1
            }}
            legendStyle={{
              fontColor: "#979797",
              showBorder: false
            }}/>
        </div>
        <div className={styles.rightBlock}>
          Something about viewership here
        </div>
      </div>
    )
  }
}

export default Viewers
