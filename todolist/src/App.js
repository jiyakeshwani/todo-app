import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import TodoList from "./components/TodoList";
import { Connect } from "react-redux";
import { addTodo, editSubmit, handleCheck } from "./store/action";

function App(props) {
  let [todoInput, setTodoInput] = useState("");
  let [editTodo, setEditTodo] = useState("");
  let [addBtn, setAddBtn] = useState(true);
  let [filter, setFilter] = useState("All");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!todoInput) {
      alert("Enter a todo please");
    } else if (todoInput && !addBtn) {
      if (editTodo) {
        dispatch(editSubmit(editTodo, { todo: todoInput }));
        setAddBtn(true);
        setTodoInput("");
        setEditTodo("");
      }
    } else {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  };

  function handleCheckBox(id) {
    dispatch(handleCheck(id));
  }
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
          filter={filter}
          setFilter={setFilter}
          setAddBtn={setAddBtn}
          setTodoInput={setTodoInput}
          setEditTodo={setEditTodo}
          handleCheckBox={handleCheckBox}
        />
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
