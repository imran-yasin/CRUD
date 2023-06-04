import React from "react";
import { Routes, Route } from "react-router";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Home from "./Components/Home";
import Update from "./Components/Update";
function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
