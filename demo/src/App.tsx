import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <div>Hello</div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;