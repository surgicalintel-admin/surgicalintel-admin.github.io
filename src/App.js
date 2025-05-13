import './App.css';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Healthcare from "./pages/Healthcare";

const  App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Routes>
        <Route path="/" element={<Healthcare />} />
      </Routes>
    </div>
  );
}

export default App;
