import React from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

export default (props) => (
  <LineChart data={{"2017-01-01": 11, "2017-01-02": 5}} />
  )
