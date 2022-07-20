import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function Charts(props) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        queue: "queue1",
        label: "Max Temperature (\xB0C)",
        backgroundColor: "#ba7846",
        hoverBackgroundColor: "#db560c",
        borderColor: "#FB7671",
        hoverBorderColor: "#D73933",
        data: props.tempmax,
      },
      {
        queue: "queue2",
        label: "Min Temperature (\xB0C)",
        backgroundColor: "#FFC1BF",
        hoverBackgroundColor: "#F98783",
        borderColor: "#FB7671",
        hoverBorderColor: "#D73933",
        data: props.tempmin,
      },
      {
        queue: "queue3",
        label: "Humidity (%)",
        backgroundColor: "#AAE4FF",
        hoverBackgroundColor: "#62CDFF",
        borderColor: "#26ADEC",
        hoverBorderColor: "#1E86B6",
        data: props.hum,
      },
      {
        queue: "queue4",
        label: "Windspeed (m/s)",
        backgroundColor: "#FFFFAE",
        hoverBackgroundColor: "#FFFF6F",
        borderColor: "#D8D831",
        hoverBorderColor: "#D8D831",
        data: props.windspeed,
      },
    ],
  };
  return (
    <div>
      <Bar
        data={data}
        width={120}
        height={70}
        options={{
          maintainAspectRatio: true,
          duration: 2000,
        }}
      />
    </div>
  );
}

export default Charts;
