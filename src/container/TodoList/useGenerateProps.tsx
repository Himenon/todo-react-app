import { type Widgets } from "../../presentation";

import { TodoListStore } from "./store";
export type GenerateTodoListPropsArgs = {};

export const useGenerateProps = (
  _args: GenerateTodoListPropsArgs
): Widgets.TodoListProps => {
  const todoItems = TodoListStore.useTodoItems();
  return {
    addTodoForm: {
      onSubmit: (fields) => {
        TodoListStore.addTodo({
          id: self.crypto.randomUUID().toString(),
          title: fields.title,
        });
      },
    },
    items: todoItems.map((todoItem): Widgets.TodoListProps["items"][number] => {
      return {
        title: todoItem.title,
        removeButton: {
          onClick: () => {
            TodoListStore.removeTodo(todoItem.id);
          },
        },
      };
    }),
  };
};
