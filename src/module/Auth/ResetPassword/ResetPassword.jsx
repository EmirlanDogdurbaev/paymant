import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import styles from './ResetPassword.module.scss';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const extractParams = (url) => {
        const urlObj = new URL(url);
        const token = urlObj.searchParams.get('token');
        const uid = urlObj.searchParams.get('uid');
        return {token, uid};
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = window.location.href;
        const {token, uid} = extractParams(url);

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            await axios.post('http://192.168.212.149:8000/api/v1/user/password/reset/confirm/', {
                token, uid, new_password: password,
            });
            setMessage('Password reset successful');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            setMessage('Password reset failed');
            console.error(error);
        }
    };

    const [email, setEmail] = useState('');
    const getToken = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://192.168.212.149:8000/api/v1/user/password/reset/", {email})
        } catch (error) {
            console.error(error);
        }
    }

    return (<div className={styles.resetPasswordContainer}>
        <h1>Reset Password</h1>
        <form onSubmit={getToken}>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <label>Email: </label>

                <input type="email" style={{marginBottom: "10px"}} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>

                <button type={"submit"} style={{height: "40px", width: "100%"}}>Submit</button>

            </div>
        </form>
        <form onSubmit={handleSubmit}>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit" style={{width: "400px"}}>Reset Password</button>
        </form>
        {message &&
            <p className={message === 'Password reset successful' ? styles.success : styles.error}>{message}</p>}
    </div>);
};

export default ResetPassword;
