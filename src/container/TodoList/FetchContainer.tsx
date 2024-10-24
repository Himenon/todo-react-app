import * as React from "react";
import { Widgets } from "../../presentation";

import TodoListContainer from "./Container";

export const TodoListFetchContainer: React.FC = () => {
  const [status, setStatus] = React.useState<"READY" | "PENDING">("PENDING");

  React.useEffect(() => {
    window.setTimeout(() => {
      setStatus("READY");
    }, 100);

    return () => {
      setStatus("PENDING");
    };
  }, []);

  if (status === "PENDING") {
    return <Widgets.Loading type="TEXT" />;
  }

  return <TodoListContainer />;
};

TodoListFetchContainer.displayName = "TodoListFetchContainer";

export default TodoListFetchContainer;
