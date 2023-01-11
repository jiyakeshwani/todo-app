import { createStore } from "redux";
const initialData = {
  todos: [],
};

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
    // case "check":

    //   state[action.payload.id].check = !state[action.payload.id].check;
    //   return [...state];
    case "delete_todo":
      let updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: updatedTodos };
    case "edit_todo":
      let editedTodo = state.todos.find((todo) => {
        return todo.id === action.id;
      });
      console.log(editedTodo);

    case "edit_todo_submit":
      // let editedTodoItem = state.todos.find((todo) => {
      //   return todo.id === action.id;
      // });
      
      // if (editedTodoItem.id === action.id) {
      //   console.log(editedTodoItem);
      // }

    default:
      return state;
  }
}

export let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
