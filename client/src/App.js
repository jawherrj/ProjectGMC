import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import NavigationBar from "./components/NavigationBar";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./JS/actions/authactions";
import Aboutus from "./components/Aboutus";
//import { useEffect } from "react";

function App() {
  const dispatch = useDispatch;

  // useEffect(() => {

  // }, []);
  const handleClick = () => {
    dispatch(getCurrentUser());
  };
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);
  return (
    <div>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<Aboutus />} />
        </Routes>
      </div>
      {/* <button onClick={handleClick}>click</button> */}
    </div>
  );
}

export default App;
