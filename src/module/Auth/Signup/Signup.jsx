import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../../store/slices/authSlice.js";
import {useNavigate} from "react-router-dom";
import styles from "./Signup.module.scss";

const Signup = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loading = useSelector((state) => state.auth.status === "loading");
    const error = useSelector((state) => state.auth.error);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    const handleSignup = () => {
        dispatch(signup({password, email}));
        navigate("/");
    };

    if (token) {
        return null;
    }

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupForm}>
                <h2 className={styles.signupTitle}>Signup</h2>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.signupInput}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.signupInput}
                />


                <div className={styles.linkContainer}>
                    <button
                        onClick={handleSignup}
                        disabled={loading}
                        className={styles.signupButton}
                    >
                        {loading ? "Загрузка..." : "Войти"}
                    </button>
                </div>
                {error && <p className={styles.signupError}>Error: {error}</p>}
            </div>
        </div>
    );
};

export default Signup;
