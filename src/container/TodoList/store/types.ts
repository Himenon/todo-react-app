type TodoItemResponse = {
  items: string[];
};

export type TodoItem = {
  title: string;
};

export type State = {
  res: TodoItemResponse | null;
};
