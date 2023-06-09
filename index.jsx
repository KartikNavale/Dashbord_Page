import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [50, 60, 70, 65, 80],
      backgroundColor: '#2196F3',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Graph = () => {
  return (
    <div>
      <h2>Bar Graph Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;

import React from 'react';
import Graph from './Graph';

const App = () => {
  return (
    <div>
      <Graph />
    </div>
  );
};

export default App;

