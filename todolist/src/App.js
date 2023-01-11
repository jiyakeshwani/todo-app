import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import TodoList from "./components/TodoList";
import { Connect } from "react-redux";
import { addTodo, deleteTodo, editTodos, editSubmit } from "./store/action";
import update from "react-addons-update";


function App(props) {
  let [todoInput, setTodoInput] = useState("");
  let [editTodo, setEditTodo] = useState("");
  let [addBtn, setAddBtn] = useState(true);
  let [filter, setFilter] = useState("All");
  let [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!todoInput) {
      alert("Enter a todo please");
    } else if (todoInput && !addBtn) {
      props.todos.map((todo) => {
        if (todo.id === editTodo) {
          console.log(todo.todo);
          console.log(todoInput);
          return update(todo ,{
            
          })
        }
        return todo;
      });
    } else {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  };

  return (
    <>
      <div className="container flex center column">
        <h1>What needs to be done❓</h1>
        <div className="addtodo flex space-btw">
          <input
            placeholder="✍️ Add Todo..."
            value={todoInput}
            name="todo"
            onChange={(e) => setTodoInput(e.target.value)}
            required
          />
          {addBtn ? (
            <button onClick={handleSubmit}>➕</button>
          ) : (
            <button onClick={handleSubmit}>📝</button>
          )}
        </div>
        <TodoList
          todoInput={todoInput}
          setAddBtn={setAddBtn}
          setTodoInput={setTodoInput}
          setEditTodo={setEditTodo}
        />
        <div className="filters flex space-btw">
          <button
            name="Active"
            className={filter === "Active" ? "active-class" : "filter-btn"}
          >
            Active
          </button>
          <button
            name="Completed"
            className={filter === "Completed" ? "active-class" : "filter-btn"}
          >
            Completed
          </button>
          <button
            name="All"
            className={filter === "All" ? "active-class" : "filter-btn"}
          >
            All
          </button>
        </div>
      </div>
    </>
  );
}

function getTodos(state) {
  return {
    todos: state.todos,
  };
}
export default connect(getTodos)(App);
