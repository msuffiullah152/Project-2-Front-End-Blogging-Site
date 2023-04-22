import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CreatePage from "./components/CreatePost";
import Posts from "./components/Post";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
