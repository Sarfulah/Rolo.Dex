import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Loading from "./pages/loading";
import Generate from "./pages/generate";
import Search from "./pages/search";

function App() {
  return (
    // <Rolodex />
    <Router>
    <div>
    <Route exact path="/" component={Loading} />
    <Route exact path="/loggedin" component={Home} />
    <Route exact path="/newCard" component={Generate} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/camera" component={Camera}/>
    </div>
    </Router>
  );
}

export default App;