import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import Meme from "./components/meme/Meme";
import AOS from 'aos';

function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  },[])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/memes" element={<Meme />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App