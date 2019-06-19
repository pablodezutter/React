import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
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
              <br />
              <ul>
                {this.state.list.map(item => {
                  return 
                  (<li key={item.id} >
                  {item.value}
                  <button
                   className="btn btn-warning" 
                   type="submit"
                   onClick={() => this.deleteItem(item.id)} >

                  Done
                </button>

                )</li>
                };
              </ul>
            
            </form>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default TodoList;
