import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
}

export default App;