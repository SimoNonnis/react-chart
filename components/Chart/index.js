import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const propTypes = {
  data: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export const Chart = ({ data, label }) => {
  const chartData = {
    labels: [...Object.keys(data)],
    datasets: [
      {
        label,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        data: [...Object.values(data)]
      }
    ]
  };

  return <Line data={chartData} options={options} />;
};

Chart.propTypes = propTypes;
