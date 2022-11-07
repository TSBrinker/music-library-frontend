import React, { useState } from "react";
import "./SearchBar.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let songs;
    console.log(props.songs);
    console.log(query);
    if (query.length > 0) {
      songs = props.songs.filter((song) => {
        if (
          song.title.includes(query) ||
          song.artist.includes(query) ||
          song.album.includes(query) ||
          song.release_date.includes(query) ||
          song.genre.includes(query)
        ) {
          return true;
        } else {
          return false;
        }
      });
      console.log(songs);
      setQuery("");
      props.setSongs(songs);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="What are you looking for?"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Show me the money!</button>
    </Form>
  );
};

export default SearchBar;

// I think what i need to do is to return the query from here , then put an if statement in the music table to filter by the query?
