import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import Signup from "./module/Auth/Signup/Signup.jsx";
import Login from "./module/Auth/Login/Login.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <Layout>
        {localStorage.getItem("token") ? (
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Layout>
    </>
  );
}

export default App;
