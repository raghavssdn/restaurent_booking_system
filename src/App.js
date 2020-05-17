import React, { Component } from "react";
import { ParentComponent } from "./container/parentcomponent";

class App extends Component {

  render() {
    return (
      <div className="container ">
        <ParentComponent />
      </div>
    );
  }
}

export default App;
