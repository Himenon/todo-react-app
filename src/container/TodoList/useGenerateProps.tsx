import { type Widgets } from "../../presentation";

export type GenerateTodoListPropsArgs = {};

export const useGenerateProps = (
  _args: GenerateTodoListPropsArgs
): Widgets.TodoListProps => {
  return {
    items: [],
  };
};
