import React, { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="container">
      <h1 className="my-4">Dashboard</h1>
      <div className="charts">
        <LineChart data={data} width={400} height={400}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </div>
    </section>
  );
};

export default Dashboard;
