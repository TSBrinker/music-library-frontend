import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let query = query;
  }

  return (
    <div>
      <input
        required
        type="text"
        value={query}
        placeholder="What are you looking for?"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;

// I think what i need to do is to return the query from here , then put an if statement in the music table to filter by the query?
