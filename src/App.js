import React, { Component } from "react";
import Lists from "./components/Lists";
import "./sass/app.scss";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <Lists />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
