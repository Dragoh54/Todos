import React from "react";
import "./App.css";
import Todo from "./Todo.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todos: [
        {
          name: "One",
          done: true,
        },
        {
          name: "Two",
          done: false,
        },
      ],
    };
  }
  render() {
    const { todos, name } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    const undoneCount = todos.filter((todo) => !todo.done).length;
    return (
      <div className="box">
        <div className="upBox">
          <div className="todoNumber">ALL: {doneCount + undoneCount}</div>
          <div className="todoNumber">DONE: {doneCount}</div>
          <div className="todoNumber">LEFT: {undoneCount}</div>
        </div>
        <div className="inputTodo">
          <input
            value={name}
            onChange={this.handleSetName}
            className="inputName"
          />
          <button onClick={this.handleAddTodo} className="save">
            Save
          </button>
        </div>
        <div className="todoList">
          {this.state.todos.map((todo) => (
            <Todo
              name={todo.name}
              done={todo.done}
              onDone={this.handleSetDone}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleAddTodo = () => {
    if (this.state.name !== "") {
      const todo = {
        name: this.state.name,
        done: false,
      };
      this.setState({
        name: "",
        todos: this.state.todos.concat([todo]),
      });
    }
  };
  handleSetDone = (newDone, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done: newDone } : todo
      ),
    });
  };
  handleDelete = (name) => {
    this.setState({
      todos: this.state.todos.filter((e) => e.name !== name),
    });
  };
}

export default App;
