import * as React from "react";

export type TodoItemProps = {
  title: string;
  removeButton: Pick<React.JSX.IntrinsicElements["button"], "onClick">;
};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <button {...props.removeButton}>Remove</button>
    </div>
  );
};

TodoItem.displayName = "TodoItem";

export default TodoItem;
