import React from "react";
import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import AddTask from "./components/UI/AddTask";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <AddTask />
    </BrowserRouter>
  );
}
export default App;
