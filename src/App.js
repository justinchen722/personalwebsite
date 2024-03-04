import "./App.css";
import Home from "./Components/home";
import Nav from "./Components/nav";
import Res from "./Components/resume";
import Portfolio from "./Components/portfolio";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home sasha = 'false' />} />
          <Route path="/about-me" element={<Home sasha = 'true' />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Res />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
