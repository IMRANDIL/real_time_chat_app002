import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

function App() {
  const { userInfo } = useSelector((state) => state.registerUser);
  return (
    <>
      <ToastContainer />
      <div className="app">
        <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={userInfo ? <Home /> : <Signup />} />

            <Route
              path="/profile"
              element={userInfo ? <Profile /> : <Signup />}
            />

            <Route path="/auth/register" element={<Signup />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="*" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
