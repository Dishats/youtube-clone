import React from "react";
import Navbar from "./components/navbar";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/search";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";

function App() {
  const { loading } = useAuth();
  return (
    <div>
      {/* {loading && <Loading />} */}
      
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;
