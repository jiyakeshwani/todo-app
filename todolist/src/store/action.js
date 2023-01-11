export const addTodo = (todo) => {
  return {
    type: "add_todo",
    payload: {
      id: new Date().getTime().toString(),
      todo: todo,
      check: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "delete_todo",
    id,
  };
};
export const editTodos = (payload) => {
  return {
    type: "edit_todo",
    payload,
  };
};
export const handleCheck = (payload) => {
  return {
    type: "check",
    payload,
  };
};

export const editSubmit = (id, payload) => {
  return {
    type: "edit_todo_submit",
    id,
    payload,
  };
};
