import React from 'react'
import Chart from "react-apexcharts";

function ChartCom() {
    let obj = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
  return (
    <>
            <Chart options={obj.options} series={obj.series} type="donut" width="380" />
    </>
  )
}

export default ChartCom