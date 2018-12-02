import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import ServicesDetails from "./components/pages/ServicesDetails";
import Contact from "./components/pages/Contact";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            My App
            <Menu />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services-details" component={ServicesDetails} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
