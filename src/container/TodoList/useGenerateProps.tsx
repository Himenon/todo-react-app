import { type Widgets } from "../../presentation";

import { TodoListStore } from "./store";
export type GenerateTodoListPropsArgs = {};

export const useGenerateProps = (
  _args: GenerateTodoListPropsArgs
): Widgets.TodoListProps => {
  const todoItems = TodoListStore.useTodoItems();
  return {
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
