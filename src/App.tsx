import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./contexts/UserProvider";
import Dashboard from "./pages/Dashborad";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
    {/* <NavBar /> */}
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  );
}

export default App;
