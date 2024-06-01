import React, {useEffect, useState} from "react";
import AppCard from "../../components/AppCard/AppCard";
import classes from './TransactionPage.module.scss'
import axios from "axios";
import {api} from "../../store/slices/authSlice.js";

export default function TransactionPage() {
    const [apps, setApps] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            axios.get(`${api}/app/all`).then((res) => {
                setApps(res.data);
            })
        } catch (err) {
            console.log(err);
        }
    }, []);

    console.log(apps)


    return (
        <div className={classes.TransactionPage} style={{paddingTop: '120px'}}>
            {/*<div className={classes.apps}>*/}
            {/*    {apps.map((app, index) => {*/}
            {/*        return <AppCard key={index} data={app}/>*/}
            {/*    })}*/}
            {/*</div>*/}
            {/*<Table*/}
            {/*    dataSource={data.map((item) => ({...item, key: item.created_at}))}*/}
            {/*    columns={columns}*/}
            {/*/>*/}

            <div className={classes.apps}>
                {apps.map((app, index) => {
                    return <AppCard key={index} data={app}/>
                })}
            </div>
        </div>
    );
}
