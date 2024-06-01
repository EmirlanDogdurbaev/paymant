import React, {useEffect, useState} from "react";
import AppCard from "../../components/AppCard/AppCard";
import classes from './TransactionPage.module.scss'
import axios from "axios";
import {api} from "../../store/slices/authSlice.js";
import {token} from "../../store/slices/transactionSlice.js";
import AppsCreate from "../../components/Apps/AppsCreate/AppsCreate.jsx";

function TransactionPage() {
    const [apps, setApps] = useState([]);
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchApps = async () => {
            try {
                const response = await axios.get(`${api}/app/all`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setApps(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchApps();
    }, [api, token]);

    console.log(apps)


    return (
        <div className={classes.TransactionPage} style={{paddingTop: '120px'}}>

            <div className={classes.apps}>
                {apps.map((app, index) => {
                    return <AppCard key={index} data={app}/>
                })}
            </div>




            <AppsCreate/>

        </div>
    );
}

export default TransactionPage
