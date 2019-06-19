import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, welcome to my To Do App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
