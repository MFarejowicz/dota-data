import React from "react"
import TreeMap from "replot-treemap"
import styles from "./Block.css"


class Tournaments extends React.Component {

  render() {
    const data = [
      {organizer: "Valve", series: "The International", tournament: "2011", prizepool: 1600000},
      {organizer: "Valve", series: "The International", tournament: "2012", prizepool: 1600000},
      {organizer: "Valve", series: "The International", tournament: "2013", prizepool: 2874380},
      {organizer: "Valve", series: "The International", tournament: "2014", prizepool: 10931105},
      {organizer: "Valve", series: "The International", tournament: "2015", prizepool: 18429613},
      {organizer: "Valve", series: "The International", tournament: "2016", prizepool: 20770460},
      {organizer: "Valve", series: "The International", tournament: "2017", prizepool: 24787916},
      {organizer: "Valve", series: "Majors", tournament: "Kiev 2017", prizepool: 3000000},
      {organizer: "Valve", series: "Majors", tournament: "Boston 2016", prizepool: 3000000},
      {organizer: "Valve", series: "Majors", tournament: "Manila 2016", prizepool: 3000000},
      {organizer: "Valve", series: "Majors", tournament: "Shanghai 2016", prizepool: 3000000},
      {organizer: "Valve", series: "Majors", tournament: "Frankfurt 2015", prizepool: 3000000},
      {organizer: "Third Party", series: "Epicenter", tournament: "2017", prizepool: 500000},
      {organizer: "Third Party", series: "i-League StarSeries", tournament: "Season 3", prizepool: 300000},
      {organizer: "Third Party", series: "ESL One", tournament: "Hamburg 2017", prizepool: 250000},
      {organizer: "Third Party", series: "Mars League", tournament: "Summer 2017", prizepool: 250000},
      {organizer: "Third Party", series: "ESL One", tournament: "Genting 2017", prizepool: 250000},
      {organizer: "Third Party", series: "Dota Pit", tournament: "Season 5", prizepool: 139860},
      {organizer: "Third Party", series: "Summit", tournament: "Season 7", prizepool: 100000},
      {organizer: "Third Party", series: "Summit", tournament: "Season 6", prizepool: 100000},
      {organizer: "Third Party", series: "Mars League", tournament: "Autumn 2016", prizepool: 250000},
      {organizer: "Third Party", series: "i-League StarSeries", tournament: "Season 2", prizepool: 300000},
      {organizer: "Third Party", series: "Summit", tournament: "Season 5", prizepool: 101044},
      {organizer: "Third Party", series: "ESL One", tournament: "Frankfurt 2016", prizepool: 314545},
      {organizer: "Third Party", series: "Epicenter", tournament: "2016", prizepool: 500000},
      {organizer: "Third Party", series: "ESL One", tournament: "Manila 2016", prizepool: 250000},
      {organizer: "Third Party", series: "Dota Pit", tournament: "Season 4", prizepool: 195274},
      {organizer: "Third Party", series: "Mars League", tournament: "Winter 2015", prizepool: 277668},
      {organizer: "Third Party", series: "i-League StarSeries", tournament: "Season 1", prizepool: 302277},
      {organizer: "Third Party", series: "Summit", tournament: "Season 4", prizepool: 114866},
      {organizer: "Third Party", series: "ESL One", tournament: "New York 2015", prizepool: 286622},
      {organizer: "Third Party", series: "ESL One", tournament: "Frankfurt 2015", prizepool: 286622},
      {organizer: "Third Party", series: "Mars League", tournament: "Spring 2015", prizepool: 241815},
      {organizer: "Third Party", series: "Summit", tournament: "Season 3", prizepool: 271685},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 12", prizepool: 150000},
      {organizer: "Third Party", series: "Dota Pit", tournament: "Season 3", prizepool: 265378},
      {organizer: "Third Party", series: "Summit", tournament: "Season 2", prizepool: 129258},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 11", prizepool: 86521},
      {organizer: "Third Party", series: "ESL One", tournament: "New York 2014", prizepool: 141010},
      {organizer: "Third Party", series: "Dota Pit", tournament: "Season 2", prizepool: 80589},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 10", prizepool: 273980},
      {organizer: "Third Party", series: "ESL One", tournament: "Frankfurt 2014", prizepool: 210900},
      {organizer: "Third Party", series: "Summit", tournament: "Season 1", prizepool: 132350},
      {organizer: "Third Party", series: "Mars League", tournament: "Summer 2014", prizepool: 24046},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 9", prizepool: 190162},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 8", prizepool: 124000},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Kick-Off", prizepool: 50000},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 1", prizepool: 265257},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 2", prizepool: 115560},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 3", prizepool: 149582},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 4", prizepool: 150000},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 5", prizepool: 100000},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 6", prizepool: 185000},
      {organizer: "Third Party", series: "DreamLeague", tournament: "Season 7", prizepool: 175000},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 7", prizepool: 22500},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 6", prizepool: 22500},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 5", prizepool: 15000},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 4", prizepool: 15000},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 3", prizepool: 15000},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 2", prizepool: 15000},
      {organizer: "Third Party", series: "StarSeries", tournament: "Season 1", prizepool: 15000},
      {organizer: "Third Party", series: "Dota Pit", tournament: "Season 1", prizepool: 3000}
    ]
    const colorPalette = [
      "#500700", "#193858", "#0b7640", "#51385f",
      "#d8bc32", "#8c1f0b", "#235160"
    ]

    return (
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <TreeMap
            width="95%"
            data={data}
            keyOrder={["organizer", "series", "tournament"]}
            weightKey="prizepool"
            color={colorPalette}/>
        </div>
        <div className={styles.rightBlock}>
          Something about tournaments here
        </div>
      </div>
    )
  }
}

export default Tournaments
