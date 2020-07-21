import React, { useState, useEffect } from "react";
import API from "../utils/API";

import Search from "../components/Search/";
import Results from "../components/Results";

function Books() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    API.search(search)
      .then((res) => {
        if (!res.data.items) {
          setEmpty("No books found!");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setResults(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleSearchSubmit = (search) => {
    setSearch(search);
  };
    return (
    <div>
     <Search handleSearchSubmit={handleSearchSubmit} />
     <Results results={results} empty={empty} />
     </div>
    );
  }


export default Books;
