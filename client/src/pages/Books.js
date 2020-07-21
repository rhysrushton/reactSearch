import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Search from "../components/Search/";

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
      <Container fluid>
     <Search handleSearchSubmit={handleSearchSubmit} />
      </Container>
    );
  }


export default Books;
