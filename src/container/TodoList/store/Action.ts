import { state } from "./State";
import { proxyMap } from "valtio/utils";
import type * as Types from "./types";

export const initialize = () => {
  state.todoItems = proxyMap([
    ["#1", { id: "#1", title: "Vue" }],
    ["#2", { id: "#2", title: "Fes" }],
    ["#3", { id: "#3", title: "After" }],
    ["#4", { id: "#4", title: "Party" }],
    ["#5", { id: "#5", title: "2024" }],
  ]);
};

export const clear = () => {
  state.todoItems = null;
};

export const addTodo = (newTodoItem: Types.TodoItem) => {
  if (!state.todoItems) {
    return;
  }
  if (state.todoItems.has(newTodoItem.id)) {
    return;
  }
  state.todoItems.set(newTodoItem.id, newTodoItem);
};

export const removeTodo = (todoItemId: Types.TodoItem["id"]) => {
  if (!state.todoItems) {
    return;
  }
  state.todoItems.delete(todoItemId);
};
