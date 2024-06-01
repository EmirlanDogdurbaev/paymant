import React from "react";
import conf from "./conf.svg";
import classes from './AppCard.module.scss'
import { Link } from "react-router-dom";
export default function AppCard({ data }) {
  return (
    <div className={classes.AppCard}>
      <div>
        <span>{data.title}</span>
        <Link to={`/app/${data.id}`}><img src={conf} /></Link>
      </div>
      <div>{data.income}</div>
    </div>
  );
}
