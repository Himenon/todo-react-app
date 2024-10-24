import * as React from "react";
import TodoItem, { type TodoItemProps } from "./TodoItem";
import AddTodoForm, { type AddTodoFormProps } from "./AddTodoForm";

export type TodoListProps = {
  items: TodoItemProps[];
  addTodoForm: AddTodoFormProps;
};

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm {...props.addTodoForm} />
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
