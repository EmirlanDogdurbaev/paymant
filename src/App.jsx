import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {

  return (
    <>
    <Header/>
     <Layout>
       <Routes>
         <Route path="/" exact element={<HomePage/>} />
       </Routes>
     </Layout>
    </>
  )
}

export default App
