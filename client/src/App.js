import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Loading from "./pages/loading";
import Generate from "./pages/generate";
function App() {
  return (
    // <Rolodex />
    <Router>
    <div>
    <Route exact path="/" component={Loading} />
    <Route exact path="/loggedin" component={Home} />
    <Route exact path="/newCard" component={Generate} />
    
    </div>
    </Router>
  );
}

export default App;