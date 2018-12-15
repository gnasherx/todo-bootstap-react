import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddTodo from "./components/AddTodo";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={AddTodo} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
