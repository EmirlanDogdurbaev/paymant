import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../store/slices/authSlice";

export default function AppDetail() {
  const [app, setApp] = useState({});

  const params = useParams();
  useEffect(() => {
    async function fetchaApp() {
      try {
        const res = await axios.get(api + "/app/" + params.id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setApp(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchaApp();
  }, []);
  return (
    <div style={{ transform: "translate(200px, 200px)" }}>
      <h1>{app.title}</h1>
      <h2>{app.account}</h2>
    </div>
  );
}
