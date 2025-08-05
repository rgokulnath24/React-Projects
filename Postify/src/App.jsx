import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./Pages/Apply";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;
