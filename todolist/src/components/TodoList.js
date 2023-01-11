import React from "react";

import { connect } from "react-redux";
import { deleteTodo, editTodos } from "../store/action";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="todos flex center column">
          {this.props.todos.length > 0 && this.props.filter === "Active"
            ? this.props.todos.map((todo) => {
                console.log(todo);
                return (
                  todo.check === false && (
                    <div className="flex todo space-btw">
                      <div className="flex">
                        <input
                          type="checkbox"
                          checked={todo.check}
                          name="check"
                          onChange={() => this.props.handleCheckBox(todo.id)}
                        />
                        <p>{todo.todo}</p>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            this.props.dispatch(
                              editTodos(todo.id),
                              this.props.setAddBtn(false),
                              this.props.setTodoInput(todo.todo),
                              this.props.setEditTodo(todo.id)
                            )
                          }
                        >
                          📝
                        </button>
                        <button
                          onClick={() =>
                            this.props.dispatch(deleteTodo(todo.id))
                          }
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  )
                );
              })
            : null}
            {this.props.todos.length > 0 && this.props.filter === "Completed"
            ? this.props.todos.map((todo) => {
                console.log(todo);
                return (
                  todo.check === true && (
                    <div className="flex todo space-btw">
                      <div className="flex">
                        <input
                          type="checkbox"
                          checked={todo.check}
                          name="check"
                          onChange={() => this.props.handleCheckBox(todo.id)}
                        />
                        <p>{todo.todo}</p>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            this.props.dispatch(
                              editTodos(todo.id),
                              this.props.setAddBtn(false),
                              this.props.setTodoInput(todo.todo),
                              this.props.setEditTodo(todo.id)
                            )
                          }
                        >
                          📝
                        </button>
                        <button
                          onClick={() =>
                            this.props.dispatch(deleteTodo(todo.id))
                          }
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  )
                );
              })
            : null}
            {this.props.todos.length > 0 && this.props.filter === "All"
            ? this.props.todos.map((todo) => {
                console.log(todo);
                return (
                  (
                    <div className="flex todo space-btw">
                      <div className="flex">
                        <input
                          type="checkbox"
                          checked={todo.check}
                          name="check"
                          onChange={() => this.props.handleCheckBox(todo.id)}
                        />
                        <p>{todo.todo}</p>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            this.props.dispatch(
                              editTodos(todo.id),
                              this.props.setAddBtn(false),
                              this.props.setTodoInput(todo.todo),
                              this.props.setEditTodo(todo.id)
                            )
                          }
                        >
                          📝
                        </button>
                        <button
                          onClick={() =>
                            this.props.dispatch(deleteTodo(todo.id))
                          }
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  )
                );
              })
            : null}
        </div>
        <div className="filters flex space-btw">
          <button
            name="Active"
            className={
              this.props.filter === "Active" ? "active-class" : "filter-btn"
            }
            onClick={() => this.props.setFilter("Active")}
          >
            Active
          </button>
          <button
            name="Completed"
            className={
              this.props.filter === "Completed" ? "active-class" : "filter-btn"
            }
            onClick={() => this.props.setFilter("Completed")}
          >
            Completed
          </button>
          <button
            name="All"
            className={
              this.props.filter === "All" ? "active-class" : "filter-btn"
            }
            onClick={() => this.props.setFilter("All")}
          >
            All
          </button>
        </div>
      </>
    );
  }
}

function getTodos(state) {
  return {
    todos: state.todos,
  };
}

export default connect(getTodos)(TodoList);
