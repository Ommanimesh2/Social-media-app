
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Homepage from "./components/Homepage/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />}/>
      </Route>
      <Route path="homepage" element={<Homepage/>}/>
    </Routes>
  </BrowserRouter>
);
