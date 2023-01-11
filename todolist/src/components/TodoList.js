import React from "react";
import { store } from "../store";
import { connect } from "react-redux";
import { deleteTodo, editTodos } from "../store/action";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todos flex center column">
        {this.props.todos.map((todo) => {
          console.log(todo);
          return (
            <div className="flex todo space-btw">
              <div className="flex">
                <input type="checkbox" value={todo.check} name="check" />
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
                  onClick={() => this.props.dispatch(deleteTodo(todo.id))}
                >
                  ❌
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function getTodos(state) {
  return {
    todos: state.todos,
  };
}

export default connect(getTodos)(TodoList);
