import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="vul je nieuwe taak in"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
              />
              <button
                onClick={() => this.addItem}
                className="btn btn-primary"
                type="submit"
              >
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
