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
      {game: "DotA 2", year: "2017", prizepool: 24787916},
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
          <p className={styles.text}>
            Sports and E-Sports alike hold tournaments featuring grand prize pools,
            in an effort to draw the toughest competitors and biggest crowds.
            Here, I compare the prize pools for the six largest tournaments of
            six popular sports. We can then analyze the trends over time with the
            use of a line chart.
            <br/> <br/>
            Immediately, one may notice that the prize pool for DotA 2 towers
            above other popular E-Sports, but also above traditional tournaments like the Masters
            in professional golf. The tournament featured here for DotA 2 is
            <i>The International</i>. Held once a year in Seattle and hosted by Valve,
            it regularly holds the position for largest prize pool in any
            E-Sport, and payouts from combined payouts from all Internationals
            are higher than the combined payouts from the next five largest E-Sports
            over recent years.
            <br/> <br/>
            A popular feature for E-Sports tournaments that is not often seen in
            standard sports operations is the ability for fans to contribute to
            the prize pool, either directly or indirectly through in-game purchases. This is a major reason for the prize pool size of E-Sports tournaments. DotA 2 uses this technique especially well, and so we see immense
            growth for <i>The International</i>'s prize pool. Other E-Sports such as Halo and Smite have not been able to consistently deliver large prize pools. And prize pool increases
            in mainstream sports are often only as a result of the tournament organizers and not the fan base. The ability for DotA 2 fans to foster the game's growth is a major reason for it's success in the E-Sports scene.
            Other E-Sports, and possibly other mainstream sports, just cannot keep up with the growth of DotA 2.
          </p>
        </div>
      </div>
    )
  }
}

export default PrizePools
