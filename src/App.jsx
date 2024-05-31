import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

function App() {

  return (
    <>
     <Layout>
       <Routes>
         <Route path="/" exact comonent={App} />
       </Routes>
     </Layout>
    </>
  )
}

export default App
