import { createStore } from "redux";
const initialData = {
  todos: [],
};

function saveToLocalStorage(state) {
  try {
    const todolist = JSON.stringify(state);
    localStorage.setItem("localStorage", todolist);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const todolist = localStorage.getItem("localStorage");
    if (todolist === null) return undefined;
    return JSON.parse(todolist);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

function reducer(state = initialData, action) {
  switch (action.type) {
    case "add_todo":
      const { id, todo, check } = action.payload;

      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            todo: todo,
            check: check,
          },
        ],
      };
    case "check":
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.check = !todo.check;
        }
        return { ...todo };
      });
     
    case "delete_todo":
      let updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: updatedTodos };
    case "edit_todo":
      let editedTodo = state.todos.find((todo) => {
        return todo.id === action.id;
      });

    case "edit_todo_submit":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.id ? { ...todo, ...action.payload } : todo;
        }),
      };

    default:
      return state;
  }
}

export let store = createStore(
  reducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveToLocalStorage(store.getState()));
