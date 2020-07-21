import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Favourites from "./pages/Favourites"
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/favourite">
            <Favourites />
          </Route>
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
