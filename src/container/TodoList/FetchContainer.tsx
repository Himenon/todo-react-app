import * as React from "react";
import { Widgets } from "../../presentation";

import { TodoListStore } from "./store";
import TodoListContainer from "./Container";

export const TodoListFetchContainer: React.FC = () => {
  const initialized = TodoListStore.useInitialized();

  React.useEffect(() => {
    window.setTimeout(() => {
      TodoListStore.initialize();
    }, 1000);

    return () => {
      TodoListStore.clear();
    };
  }, []);

  if (!initialized) {
    return <Widgets.Loading type="TEXT" />;
  }

  return <TodoListContainer />;
};

TodoListFetchContainer.displayName = "TodoListFetchContainer";

export default TodoListFetchContainer;
