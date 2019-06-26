import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BhIndex from "./BhIndex";
import UsIndex from "./UsIndex";

function App() {
  return (
    <Router>
      <Route path="/" exact component={UsIndex} />
      <Route path="/us/" component={UsIndex} />
      <Route path="/bh/" component={BhIndex} />
    </Router>
  );
}

export default App;
