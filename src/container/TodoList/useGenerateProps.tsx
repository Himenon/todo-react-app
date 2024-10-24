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
        TodoListStore.addTodo(fields.title);
      },
    },
    items: todoItems.map((todoName): Widgets.TodoListProps["items"][number] => {
      return {
        title: todoName,
        removeButton: {
          onClick: () => {
            alert(`Remove: ${todoName}`);
          },
        },
      };
    }),
  };
};
