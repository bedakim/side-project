import React, { Component } from "react";
import Search from "./components/Search";

class App extends Component {
  handleCreate = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <Search onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
