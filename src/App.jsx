import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import HomePage from './pages/HomePage.jsx';

function App() {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App
