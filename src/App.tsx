import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Input />
        <TodoList checkDone={false} />
        <TodoList checkDone={true} />
      </main>
      <Footer />
    </>
  );
};

export default App;
