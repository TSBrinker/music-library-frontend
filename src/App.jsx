import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }
  return (
    <div className="App">
      Let'sa go!
      <SearchBar songs={songs} />
      <MusicTable songs={songs} />
    </div>
  );
}

export default App;