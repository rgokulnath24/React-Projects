// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Landing from "./pages/Landing";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Content from "./pages/Content/index";
// import './assets/styles/Theme.css';
import "./assets/styles/common.scss";
import Petsy from "./pages/Petsy";
// import {Route,Routes} from "react-router-dom"
// import Alert from "./pages/Alert";
// import Sticky from "./pages/Position/Sticky";
// import Images_Sticky from "./pages/Position/Images_Sticky";
// import Overlay from "./pages/Position/Overlay";
function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <Routes>
      <Route path="/" element={<Content/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes> */}
      {/* <Footer/> */}
    <Petsy/>
      </>
  );
}

export default App;
