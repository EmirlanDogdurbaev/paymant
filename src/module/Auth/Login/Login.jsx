import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../store/slices/authSlice.js";
import styles from "./Login.module.scss";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loading = useSelector((state) => state.auth.status === "loading");
    const error = useSelector((state) => state.auth.error);

    const handleLogin = () => {
        dispatch(login({ password, email })).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                navigate("/register");
            } else {
                console.log("Ошибка входа:", response.error.message);
            }
        });
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <h2 className={styles.loginTitle}>Войти</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.loginInput}
                />
                <input
                    type="password"
                    placeholder="пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.loginInput}
                />
                <div className={styles.linkContainer}>
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className={styles.loginButton}
                    >
                        {loading ? "Загрузка..." : "Войти"}
                    </button>
                </div>
                {error && <p className={styles.loginError}>Error: {error}</p>}
            </div>
        </div>
    );
};

export default Login;
