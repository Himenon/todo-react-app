export type TodoItem = {
  id: string;
  title: string;
};

export type State = {
  todoItems: Map<TodoItem["id"], TodoItem> | null;
};
