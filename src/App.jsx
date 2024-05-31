import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import TransactionPage from './pages/TransactionPage/TransactionPage.jsx';
import Signup from "./module/Auth/Signup/Signup.jsx";

function App() {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/transaction" exact element={<TransactionPage/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App
