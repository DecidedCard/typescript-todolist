import { useInput } from "../hooks/useInput";
import { useWriteTodoMutation } from "../util/logic/todoListQuery";
import { TodoList } from "../util/type";

const Input = () => {
  const [todoTitle, onChangeTodoTitle] = useInput();
  const [todoContent, onChangeTodoContent] = useInput();
  const addMutation = useWriteTodoMutation();

  const onSubmitWriteHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoList = {
      id: crypto.randomUUID(),
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    addMutation.mutate(newTodo);
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
