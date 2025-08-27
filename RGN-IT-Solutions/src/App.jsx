import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Components/navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"


function App() {

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Navigate to ="/Home"/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </>
    )
}

export default App
