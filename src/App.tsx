import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/Footer";
import Home from "./views/Home";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";

const App: React.FC = () => {
  return (
    <Router>
      <div className="page-container position-relative
						          d-flex flex-column vh-100 vw-100
						          overflow-x-hidden overflow-y-auto">
        <Header />
        <main className="position-relative flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;