import React, {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import {Radar} from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export type CompChartData = [string, number][];

export const RadarChart = ({
  chartData,
  width,
}: {
  chartData: CompChartData;
  width: number;
}) => {
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    if (window.outerWidth < 600) {
      setFontSize(10);
    }
  }, []);

  const data: ChartData<'radar'> = {
    labels: chartData.map(item => item[0]),
    datasets: [
      {
        label: 'Skills',
        data: chartData.map(item => item[1]),
        backgroundColor: 'rgba(0, 0, 132, 0.2)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 3,
      },
    ],
  };

  const options: ChartOptions<'radar'> = {
    color: '#ffffff',
    maintainAspectRatio: true,
    font: {
      size: fontSize,
    },
    plugins: {legend: {display: false}},
    backgroundColor: '#000000',

    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          display: false,
        },
        pointLabels: {
          color: '#ffffff',
          font: {size: fontSize},
        },
      },
    },
  };

  //   return <></>;

  return <Radar style={{width}} data={data} options={options} />;
};

export default RadarChart;
