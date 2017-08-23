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
        <div className={styles.rightBlock}>
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
        <div className={styles.leftBlock}>
          <p className={styles.text}>
            Like any sport, DotA 2 and E-Sports in general depend on their fans and viewers
            to survive. If no one was interested in the game, it would cease to
            exist as a professional competition. We can use a bar graph to compare
            viewership for the major tournament in various games across multiple years.
            <br/><br/>
            In the greater scheme of things, DotA 2 pulls a fairly small crowd for
            <i>The International</i>, losing to other very popular tournaments such as
            Leagues's <i>World Championship</i> and <i>The Masters</i> golf tournament.
            This generally comes as a result of the media by which fans view video games tournaments.
            While one can watch the Super Bowl right on their TV at home, E-Sports often choose
            to livestream their tournaments on dedicated gaming platforms like <a href="https://twitch.tv">Twitch.tv</a>,
            which grants less publicity and ease of use. At the same time, this means that any viewers
            E-Sports tend to be more dedicated to the game, and this means that the prize pools we see
            are even more impressive considering the ratings.
            <br/><br/>
            Although on the whole, E-Sports like League or DotA 2 receive lower
            viewer numbers than events like the <i>Superbowl</i> or <i>The Masters</i>, the E-Sports
            scene appears to have greater growth than any mainstream event. Both the <i>Superbowl</i> and <i>The Masters</i> are
            well-established sporting events. Like the bar graph shows,
            their ratings are fairly constant, with only minor variation from year
            to year. On the other hand, <i>The International</i> and <i>The League World
            Championship</i> are relatively new tournaments, so their numbers have skyrocketed in the years
            they have existed. For both events, view counts have actually more than multiplied by 10 since
            their origins. Though we can't necessarily expect similar growth rates in the future,
            if the E-Sports scene sees even a fraction of its current growth, esults would be drastic.
            E-Sports might start to harbor mainstream attention, leading to even greater viewer numbers,
            prizepool amounts, and event popularity.
          </p>
        </div>
      </div>
    )
  }
}

export default Viewers
