import * as React from "react";

export type TodoItemProps = {
  title: string;
  removeButton: Pick<React.JSX.IntrinsicElements["button"], "onClick">;
};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <p>
      <strong>{props.title}</strong>
      <button {...props.removeButton}>Remove</button>
    </p>
  );
};

TodoItem.displayName = "TodoItem";

export default TodoItem;
