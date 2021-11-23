import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";
import MainNav from "./MainNav";

function App() {
  return (
    <div className={"signup"}>
      <MainNav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
