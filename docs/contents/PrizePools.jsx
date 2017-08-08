import React from "react"
import LineChart from "replot-line"
import styles from "./Block.css"


class PrizePools extends React.Component {

  render() {
    const data = [
      {game: "DotA 2", year: "2011", prizepool: 1600000},
      {game: "DotA 2", year: "2012", prizepool: 1600000},
      {game: "DotA 2", year: "2013", prizepool: 2874380},
      {game: "DotA 2", year: "2014", prizepool: 10931105},
      {game: "DotA 2", year: "2015", prizepool: 18429613},
      {game: "DotA 2", year: "2016", prizepool: 20770460},
      {game: "DotA 2", year: "2017", prizepool: 23989300},
      {game: "LoL", year: "2011", prizepool: 100000},
      {game: "LoL", year: "2012", prizepool: 1970000},
      {game: "LoL", year: "2013", prizepool: 2050000},
      {game: "LoL", year: "2014", prizepool: 2130000},
      {game: "LoL", year: "2015", prizepool: 2130000},
      {game: "LoL", year: "2016", prizepool: 5070000},
      {game: "Smite", year: "2015", prizepool: 2600000},
      {game: "Smite", year: "2016", prizepool: 1000000},
      {game: "Smite", year: "2017", prizepool: 1000000},
      {game: "Halo 5", year: "2016", prizepool: 2500000},
      {game: "Halo 5", year: "2017", prizepool: 1000000},
      {game: "CS:GO", year: "2016", prizepool: 1410000},
      {game: "CS:GO", year: "2017", prizepool: 1000000},
      {game: "Masters", year: "2011", prizepool: 8000000},
      {game: "Masters", year: "2012", prizepool: 8000000},
      {game: "Masters", year: "2013", prizepool: 8000000},
      {game: "Masters", year: "2014", prizepool: 9000000},
      {game: "Masters", year: "2015", prizepool: 10000000},
      {game: "Masters", year: "2016", prizepool: 10000000}
    ]
    const colorPalette = [
      "#500700", "#193858", "#0b7640", "#51385f",
      "#d8bc32", "#8c1f0b", "#235160"
    ]

    return (
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <LineChart
            width="100%"
            data={data}
            xKey="year"
            yKey="prizepool"
            groupKey="game"
            graphTitle="Line Chart of Prize Pool vs Year by Game"
            xTitle="Year"
            yTitle="Prize Pool ($)"
            yScale="lin"
            color={colorPalette}
            graphStyle={{
              lineWidth: 4
            }}
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
          Something about prizepools here
        </div>
      </div>
    )
  }
}

export default PrizePools
