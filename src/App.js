import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import "./styles/App.css";
import { Navigate, BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
 
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
