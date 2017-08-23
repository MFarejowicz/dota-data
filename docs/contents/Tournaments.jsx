import React from "react"
import TreeMap from "replot-treemap"
import styles from "./Block.css"


class Tournaments extends React.Component {

  fillTooltip(key, title, data, allData) {
    let total = 0
    for (let dataPoint of data) {
      total += dataPoint.prizepool
    }
    return (
      <div>
        <span>Prize Total: ${total}<br/></span>
      </div>
    )
  }

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
        <div className={styles.leftBlockAlt}>
          <TreeMap
            width="95%"
            data={data}
            keyOrder={["organizer", "series", "tournament"]}
            weightKey="prizepool"
            color={colorPalette}
            tooltip={false}
            tooltipContents={this.fillTooltip}/>
        </div>
        <div className={styles.rightBlockAlt}>
          <p className={styles.text}>
            Tournaments are the lifeblood of any professional sport or E-Sport,
            and DotA 2 is no exception. Tournaments are where players can prove
            their worth and earn their living. The beauty of E-Sports tournaments lies
            in the fact that they can be organized by official parties, such as Valve, the developer
            of the game, or by third-party organizations. What this means for the
            community is plenty of opportunities for the players to thrive and for the
            fans to support the game.
            <br/><br/>
            We can take a look at this treemap, organized by prizepool amounts,
            to get a feel for just how many tournaments exist, and how large the prizepools are.
            Right off the bat we see that the largest prizepools come from
            Valve-sponsored tournaments. And of the Valve sponsored tournaments,
            most of the money in DotA 2 comes from <i>The International</i>, which makes
            sense given the enourmous prizepools we saw above. Majors also provide
            significant prizepools, but they are a relatively new event, so they
            hardly compete with <i>The International</i>.
            <br/><br/>
            On the Third-Party side, we see a fairly even prizepool distribution amongst the various
            organizers. Prizepools tend to vary heavily from season to season, and
            many tournaments depend on contributions from fans to increase reward
            amounts. Though third-party event prizepools can not really compare with Valve's
            events, they are still attended by many pros and fans alike, and without them,
            DotA 2 would not be where it is today.
            <br/><br/>
            What we cannot see from the treemap but really speaks to the popularity of DotA 2
            is the projected future growth of the game. Recently, Valve announced their
            plan for the 2017-18 competitive season, which will have 11 majors and 11 minors,
            each with significant prizepools. These majors and minors will be hosted
            by the third-party organizers we do see in the treemap, but other independent
            tournaments will not disappear. This incredible growth is a feature of E-Sports
            which we do not see mirrored in the mainstream sports scene, which often
            has repeated annual tournaments with only moderate growth in prizepools.
          </p>
        </div>
      </div>
    )
  }
}

export default Tournaments
