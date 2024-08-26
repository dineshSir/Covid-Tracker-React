import React, { useState, useEffect } from "react";
import Styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";
import { dailyDataFetch } from "../../Api/index";

function Chart({ data, countryName }) {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchedDailyData = async () => {
      setDailyData(await dailyDataFetch());
    };
    fetchedDailyData();
  }, [countryName]);

  const lineData = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        label: "Infected",
        data: dailyData.map(({ confirmed }) => confirmed),
        fill: true,
        borderColor: "#3333ff",
      },
      {
        label: "Deaths",
        data: dailyData.map(({ deaths }) => deaths),
        fill: false,
        backgroundColor: "rgba(255,0,0)",
        borderColor: "red",
      },
    ],
  };

  const barData = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: `Covid Report of ${countryName}`,
        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
        backgroundColor: [" blue", "green", "red"],
        borderColor: ["#0000b3", " #267326", "#b30000"],
        borderWidth: 1,
      },
    ],
  };

  if (data) {
    if (countryName) {
      return (
        <div className={Styles.chartContainer}>
          <Bar data={barData}></Bar>
        </div>
      );
    }
  }

  return (
    <div className={Styles.chartContainer}>
      <Line data={lineData}></Line>
    </div>
  );
}

export default Chart;
