import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createTransaction } from "../../../store/slices/transactionSlice.js";

const Transaction = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        full_sum: '',
        status: 'Неизвестен',
        app: 0,
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await dispatch(createTransaction(formData));
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Full sum:</label>
                <input
                    type="number"
                    name="full_sum"
                    value={formData.full_sum}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Status:</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="Неизвестен">Неизвестен</option>
                    <option value="Отменен">Отменен</option>
                    <option value="Инициализирован">Инициализирован</option>
                    <option value="В обработке">В обработке</option>
                    <option value="Исполнен">Исполнен</option>
                </select>
            </div>
            <div>
                <label>App:</label>
                <input
                    type="number"
                    name="app"
                    value={formData.app}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" disabled={loading}>Create Item</button>
            {loading && <p>Loading...</p>}
            {success && <p>Transaction created successfully!</p>}
            {error && <p>Error: {error}</p>}
        </form>
    );
};

export default Transaction;
