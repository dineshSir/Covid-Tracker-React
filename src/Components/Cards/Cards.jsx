import React from "react";
import Styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { CardActionArea } from "@material-ui/core";

function Cards({ data }) {
  return (
    <>
      {data.confirmed && (
        <div className={Styles.cardContainer}>
          <div className={cx(Styles.individualCard, Styles.confirmed)}>
            <div className={cx(Styles.cardHeading, Styles.headingConfirmed)}>
              Infected
            </div>
            <div className={Styles.number}>
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </div>
            <div className={Styles.date}>
              {new Date(data.lastUpdate).toDateString()}
            </div>
            <div className={Styles.cardFooter}>Number of Infected people.</div>
          </div>
          <div className={cx(Styles.individualCard, Styles.recovered)}>
            <div className={cx(Styles.cardHeading, Styles.headingRecovered)}>
              Recovered
            </div>
            <div className={Styles.number}>
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </div>
            <div className={Styles.date}>
              {" "}
              {new Date(data.lastUpdate).toDateString()}
            </div>
            <div className={Styles.cardFooter}>Number of Recoveries. </div>
          </div>
          <div className={cx(Styles.individualCard, Styles.deaths)}>
            <div className={cx(Styles.cardHeading, Styles.headingDeaths)}>
              Deaths
            </div>
            <div className={Styles.number}>
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </div>
            <div className={Styles.date}>
              {" "}
              {new Date(data.lastUpdate).toDateString()}
            </div>
            <div className={Styles.cardFooter}>Number of Deaths.</div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cards;
