import React, { Component } from "react";
import Lists from "./components/Lists";
import Background from "./components/Background";
import "./sass/app.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Background />
        <main className="container">
          <Lists />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
