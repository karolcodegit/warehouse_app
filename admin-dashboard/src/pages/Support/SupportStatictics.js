import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title/Tilte";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title as ChartTitle,
  CategoryScale,
} from "chart.js";
import LineChart from "../../components/Charts/LineChart";

const SupportStatictics = () => {
  const chartRef = useRef(null);
  ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale
  );

  const [chartData, setChartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Number of reports",
        data: [], // Tutaj wprowadź rzeczywiste dane
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  const [topReporters, setTopReporters] = useState([]);

  useEffect(() => {
    // Pobierz dane zgłoszeń dla każdego miesiąca i zaktualizuj stan
    const reportsData = [12, 19, 3, 5, 2, 3, 7, 10, 15, 20, 25, 30]; // Zastąp to rzeczywistymi danymi

    setChartData((prevState) => ({
      ...prevState,
      datasets: prevState.datasets.map((dataset) => ({
        ...dataset,
        data: reportsData,
      })),
    }));

    const data = [
      { name: "Karol Znojkiewicz", errors: 10, percentage: 25 },
      { name: "Jane Doe", errors: 8, percentage: 20 },
      { name: "Bob Smith", errors: 6, percentage: 15 },
      { name: "Alice Johnson", errors: 4, percentage: 10 },
      { name: "Charlie Brown", errors: 2, percentage: 5 },
    ];

    setTopReporters(data);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white  shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Support statistics</Title>
        </header>
      </div>
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white  shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Support statistics</Title>
        </header>
      </div>
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white  shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Support statistics</Title>
        </header>
      </div>

      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 ">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Support statistics</Title>
        </header>
      </div>

      <div className="col-span-full xl:col-span-8 bg-white  shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Top reporting</Title>
        </header>
        <div className="p-5">
          <table className="table-auto w-full">
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2 font-semibold text-left">Name</th>
                <th className="p-2 font-semibold text-left">Number of errors</th>
                <th className="p-2 font-semibold text-left">Percentage</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-slate-100 ">
              {topReporters.map((reporter, index) => (
                <tr key={index}>
                  <td className="p-2">{reporter.name}</td>
                  <td className="p-2">{reporter.errors}</td>
                  <td className="p-2">{reporter.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col col-span-full sm:col-span-6 bg-white  shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Monthly report</Title>
        </header>
        <div className="p-5">
          <LineChart chartData={chartData} />
        </div>
      </div>
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white  shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-10">
          <Title tag="h2">Weekly report</Title>
        </header>
        <div className="p-5">
          <LineChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default SupportStatictics;
