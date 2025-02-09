import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashborad";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  console.log("ENV:", import.meta.env.VITE_REACT_APP_API_URL);
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
