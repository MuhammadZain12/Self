import React from "react";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" exact element={ <Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
