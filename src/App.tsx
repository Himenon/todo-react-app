import TodoListFetchContainer from "./container/TodoList/FetchContainer";

const App: React.FC = () => {
  return (
    <div>
      <TodoListFetchContainer />
    </div>
  );
};

App.displayName = "App";

export default App;
