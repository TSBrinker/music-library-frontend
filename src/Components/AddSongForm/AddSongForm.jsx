import axios from "axios";
import React, { useState } from "react";

const AddSongForm = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <form>
      <label>Title</label>
      <input required type="text" value={title} />
      <label>Artist</label>
      <input required type="text" value={artist} />
      <label>Title</label>
      <input required type="text" value={album} />
      <label>Title</label>
      <input required type="date" value={release_date} />
      <label>Title</label>
      <input required type="text" value={genre} />
      <button type="submit">Add song</button>
    </form>
  );
};

export default AddSongForm;
