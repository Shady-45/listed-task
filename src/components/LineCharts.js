import React from "react";
import "../CSS/LineChart.css";
import { useFetch } from "./getData";
import { BiChevronDown } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineCharts = () => {
  const url = "https://run.mocky.io/v3/23fd8377-2bfb-4162-b5ee-a50e88636f59";
  const { data } = useFetch(url);
  console.log(data);
  return (
    <>
      <div className="line-chart">
        <div className="line-chart-items">
          <div className="line-chart-container">
            <h2 className="chart-head">Activities</h2>
            <div className="chart-icons">
              <p>May - June 2021</p>
              <BiChevronDown />
            </div>
          </div>

          <div className="user-pro">
            <p className="guest">Guest</p>
            <p className="userss">Users</p>
          </div>
        </div>
        <LineChart
          className="line-charts"
          width={1000}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weeks" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="guest"
            stroke="#E9A0A0"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="user" stroke="#9BDD7C" />
        </LineChart>
      </div>
    </>
  );
};

export default LineCharts;
