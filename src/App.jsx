import "./App.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import TransactionPage from './pages/TransactionPage/TransactionPage.jsx';
import Signup from "./module/Auth/Signup/Signup.jsx";
import Login from "./module/Auth/Login/Login.jsx";
import Logout from "./module/Auth/Logout/Logout.jsx";
import ResetPassword from "./module/Auth/ResetPassword/ResetPassword.jsx";

function App() {
    const isAuthenticated = localStorage.getItem("access_token");
    return (<>
        <Layout>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {isAuthenticated && <Route path="/transaction" element={<TransactionPage/>}/>}
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/reset_password" element={<ResetPassword/>}/>
            </Routes>

        </Layout>
    </>)
}

export default App;
