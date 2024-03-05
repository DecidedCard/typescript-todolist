import { writeTodos } from "../api/todosApi";
import { useInput } from "../hooks/useInput";
import { todoList } from "../util/type";

const Input = () => {
  const [todoTitle, onChangeTodoTitle] = useInput();
  const [todoContent, onChangeTodoContent] = useInput();

  const onSubmitWriteHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: todoList = {
      id: crypto.randomUUID(),
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    writeTodos(newTodo);
  };
  return (
    <form onSubmit={onSubmitWriteHandler}>
      <input
        placeholder="제목을 입력해주세요"
        value={todoTitle}
        onChange={onChangeTodoTitle}
      />
      <input
        placeholder="내용을 입력해주세요"
        value={todoContent}
        onChange={onChangeTodoContent}
      />
      <button>등록</button>
    </form>
  );
};

export default Input;
