import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSongForm from "./Components/AddSongForm/AddSongForm";

function App() {
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  return (
    <div className="App">
      <SearchBar songs={songs} setSongs={setSongs} getAllSongs={getAllSongs} />
      <MusicTable songs={songs} />
      <AddSongForm getAllSongs={getAllSongs} />
    </div>
  );
}

export default App;
