import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Signin from "./pages/signIn/Signin";
import SignUp from "./pages/signUp/SignUp";
import UpdatePassword from "./pages/updatepassword/UpdatePassword";
import ConfirmPassword from "./pages/confirmpassword/ConfirmPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/update" element={<UpdatePassword />} />
        <Route path="/confirm" element={<ConfirmPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
