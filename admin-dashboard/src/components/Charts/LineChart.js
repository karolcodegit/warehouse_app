
import React, { useEffect, useRef, useState } from 'react';
import { Chart, Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              enabled: true,
            },
          },
          interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
          },
        }}
        redraw={true}
      />
    );
  };
  
  export default LineChart;