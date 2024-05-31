import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import Header from './components/Header/Header.jsx';

function App() {

  return (
    <>
    <Header/>
     <Layout>
       <Routes>
         <Route path="/" exact comonent={App} />
       </Routes>
     </Layout>
    </>
  )
}

export default App
