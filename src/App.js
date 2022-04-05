import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}

export default App;
