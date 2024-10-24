import * as React from "react";
import { Widgets } from "../../presentation";

import {
  useGenerateProps,
  type GenerateTodoListPropsArgs,
} from "./useGenerateProps";

export type TodoListContainerProps = GenerateTodoListPropsArgs;

export const TodoListContainer: React.FC<TodoListContainerProps> = (props) => {
  const todoListProps = useGenerateProps(props);
  return <Widgets.TodoList {...todoListProps} />;
};

export default TodoListContainer;
