import { useSnapshot } from "valtio";

import { state } from "./State";

export const useInitialized = () => {
  const snapshot = useSnapshot(state);
  return snapshot.todoItems !== null;
};

export const useTodoItems = () => {
  const snapshot = useSnapshot(state);
  if (snapshot.todoItems === null) {
    throw new Error("初期化してください");
  }
  return [...snapshot.todoItems.values()];
};
