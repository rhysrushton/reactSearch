import React, { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="row" id="search" name="search">
      <div className="col offset-s2 input-field col s12">
        <form>
          <div className="input-field col s6">
            <input
              type="text"
              placeholder="Search Books Here"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s6">
            <button
              className="btn col waves-effect waves-light"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                props.handleSearchSubmit(search);
              }}
              defaultValue="Harry Potter"
            >
              Search
            
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}