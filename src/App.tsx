import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <Header />
      <Input />
      <TodoList checkDone={false} />
      <TodoList checkDone={true} />
    </>
  );
};

export default App;
