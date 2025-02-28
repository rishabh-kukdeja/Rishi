import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import { searchData } from "./api/googleSearch";

const App = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    setGoogleData(data);
    navigate("/search");

  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setSearch={setSearch} />} />
        <Route path="/search" element={<SearchScreen searchTerm={searchTerm} googleData={googleData} />} />
      </Routes>
    </div>
  );
};

export default App;
