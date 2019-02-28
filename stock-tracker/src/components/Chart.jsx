import React from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

export default (props) => (
  <LineChart
    curve={false}
    messages={{empty: "No data"}}
    data={props.data}
    width="60%" />
  )
