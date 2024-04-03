import React, { Component } from "react";
import {QUESTIONS} from "./questions";
import Main from "./Main";

class App extends Component {
 
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <Main />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
