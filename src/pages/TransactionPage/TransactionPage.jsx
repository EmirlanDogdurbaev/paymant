import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import classes from "./TransactionPage.module.scss";
import axios from "axios";
import { api } from "../../store/slices/authSlice.js";
import { Table } from "antd";

export default function TransactionPage() {
  const [apps, setApps] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`${api}/app/all/analytics`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          setApps(res.data);
        });
      axios
        .get(`${api}/transaction/all`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          setTransactions(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(apps);
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "App",
      dataIndex: "app",
      key: "app",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Full sum",
      dataIndex: "full_sum",
      key: "full_sum",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];
  const appsDict = apps.reduce((acc, app) => {
    acc[app.id] = app.title;
    return acc;
  }, {});
  const newTransactions = transactions.map((transaction) => {
    return {
      ...transaction,
      app: appsDict[transaction.app] || transaction.app,
    };
  });

  return (
    <div className={classes.TransactionPage} style={{ paddingTop: "120px" }}>
      <div className={classes.apps}>
        {apps.map((app, index) => {
          return <AppCard key={index} data={app} />;
        })}
      </div>
      <Table dataSource={newTransactions} columns={columns} />
    </div>
  );
}
