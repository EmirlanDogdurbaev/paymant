// src/components/AddEntity.js
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addEntity} from "../../../store/slices/appSlice.js";
import styles from './AppsCreate.module.scss';

const AppsCreate = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [account, setAccount] = useState('');
    const status = useSelector((state) => state.entities.status);
    const error = useSelector((state) => state.entities.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length >= 1 && title.length <= 150 && account.length >= 1 && account.length <= 150) {
            dispatch(addEntity({title, account}));
        } else {
            console.log("Validation failed: Title and Account must be between 1 and 150 characters long.");
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Add your application :</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    maxLength="150"
                    minLength="1"
                />
                <input
                    type="number"
                    placeholder="Your bank account"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                    maxLength="150"
                    minLength="1"
                />
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Loading...' : 'Add Entity'}
                </button>
            </form>
            {status === 'failed' && <p className={styles.error}>Error: {error}</p>}
        </div>
    );
};

export default AppsCreate;
