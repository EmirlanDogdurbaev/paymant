import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import TransactionPage from './pages/TransactionPage/TransactionPage.jsx';
import Signup from "./module/Auth/Signup/Signup.jsx";
import Login from "./module/Auth/Login/Login.jsx";
import Logout from "./module/Auth/Logout/Logout.jsx";
import ResetPassword from "./module/Auth/ResetPassword/ResetPassword.jsx";
import AppDetail from "./pages/TransactionPage/AppDetail.jsx";

function App() {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/transaction" element={<TransactionPage/>}/>
                    <Route path="/app/:id" element={<AppDetail/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/reset_password" element={<ResetPassword/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App;
