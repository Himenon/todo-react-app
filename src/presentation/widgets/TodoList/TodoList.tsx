import * as React from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";

export type TodoListProps = {
  items: TodoItemProps[];
};

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <h2>Todo List</h2>
      <p>
        {props.items.map((item, index) => {
          return <TodoItem key={`${item.title}-${index}`} {...item} />;
        })}
      </p>
    </div>
  );
};

TodoList.displayName = "TodoList";

export default TodoList;
