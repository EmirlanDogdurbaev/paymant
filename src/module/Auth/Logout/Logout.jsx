import {useDispatch} from 'react-redux';
import {logout} from "../../../store/slices/authSlice.js";
import styles from "./Logout.module.scss";
const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <button onClick={handleLogout} style={{padding: "10px", border: "1px solid black"}} className={styles["logoutBtn"]}>
            Logout
        </button>
    );
};

export default Logout;