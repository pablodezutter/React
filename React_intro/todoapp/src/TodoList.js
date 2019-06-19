import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.addItem}>
              <input placeholder="vul je nieuwe taak in" />
              <button className="btn btn-primary" type="submit">
                add
              </button>
              <button className="btn btn-warning" type="submit">
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
