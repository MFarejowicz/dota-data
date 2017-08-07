import React from "react"
import ReactDOM from "react-dom"
import styles from "./static/styles/app.css"
import Tournaments from "./contents/Tournaments.jsx"


class App extends React.Component {

  render() {

    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.heading}>
              <div className={styles.headingContents} >
                <img className={styles.headingPic} src="./static/img/logo.png" title="DotA 2" alt="DotA 2"></img>
                <h1 className={styles.headingText}>The Data of DotA 2</h1>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.panel}>
                <h2>What's this?</h2>
                <hr/>
                <p className={styles.text}>
                  DotA 2 is a popular Multiplayer Online Battle Arena (MOBA) game, developed by Valve and released on Steam. It is free to play, and averages around 600,000 unique casual players monthly.
                  As a result of its large player-base and competitive gameplay, DotA 2 also harbors an impressive competitive scene. Featuring professional players who play the game full time, teams with coaches and managers, as
                  well as tournaments that occur at regular intervals, DotA 2 can be considered a prime example of what is considered an "E-Sport".
                  <br/>
                  <br/>
                  Often overshadowed by main-stream sports, E-Sports are often dismissed because of their relatively new status and content that many consider require significantly less exertion than typical sports.
                  With this website, I'd like to show off some of the statistics surrounding DotA 2 as an E-Sport, and where it lies in relation to sports on the whole.
                </p>
              </div>
              <div className={styles.panel}>
                <Tournaments />
              </div>
              <div className={styles.panel}>
                <h2>More About this Website</h2>
                <hr/>
                <p className={styles.text}>
                  This website is written in ReactJS, a JavaScript library developed by Facebook and maintained by its community.
                  "The Data of DotA 2" is also intended to display the depth and versatility of Replot, a React library which contains a set of data visualization tools developed
                  by the Collective Learning Group at the MIT Media Lab. The website itself is written entirely by Matt Farejowicz, an MIT sophomore and research assistant with
                  the CL Group.
                  <br/>
                  <br/>
                  All data was compiled by Matt Farejowicz, and borrowed from various different sources. Special thanks
                  to <a href="http://wiki.teamliquid.net/">Liquipedia</a> and <a href="https://www.esportsearnings.com/">E-Sports Earnings</a> for a majority of the statistics used.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footing}>
          <div className={styles.footingContents}>
            <h4 className={styles.footingText}>
              Made with <img className={styles.footingPic} src="./static/img/puck.gif" title="<3" alt="<3"></img> by Matt Farejowicz
            </h4>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
)
