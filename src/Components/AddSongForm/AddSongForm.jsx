import axios from "axios";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <input
            required
            placeholder="Title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Col>
        <Col>
          <input
            required
            placeholder="Artist"
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </Col>
        <Col>
          <input
            required
            placeholder="Album"
            type="text"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </Col>
        <Col>
          <input
            required
            type="date"
            value={release_date}
            onChange={(event) => setReleaseDate(event.target.value)}
          />
        </Col>
        <Col>
          <input
            required
            placeholder="Genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </Col>
      </Row>

      <button type="submit">Add song</button>
    </Form>
  );
};

export default AddSongForm;
