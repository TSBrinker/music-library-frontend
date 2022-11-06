import axios from "axios";
import React, { useState } from "react";

const AddSongForm = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  async function addNewSong(newSong) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      newSong
    );
    if (response.status === 201) {
      await props.getAllSongs();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
      likes: 0,
    };
    setTitle("");
    setArtist("");
    setAlbum("");
    setReleaseDate("");
    setGenre("");

    addNewSong(newSong);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="Title..."
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Artist</label>
      <input
        required
        type="text"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <label>Album</label>
      <input
        required
        type="text"
        value={album}
        onChange={(event) => setAlbum(event.target.value)}
      />
      <label>Release Date</label>
      <input
        required
        type="date"
        value={release_date}
        onChange={(event) => setReleaseDate(event.target.value)}
      />
      <label>Genre</label>
      <input
        required
        type="text"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      />
      <button type="submit">Add song</button>
    </form>
  );
};

export default AddSongForm;
