import { useInput } from "../hooks/useInput";
import { useWriteTodoMutation } from "../util/logic/todoListQuery";
import { TodoList } from "../util/type";
import * as IS from "../style/inputStyle";

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
    <IS.InputFormStyle onSubmit={onSubmitWriteHandler}>
      <IS.InputStyle
        placeholder="제목을 입력해주세요"
        value={todoTitle}
        onChange={onChangeTodoTitle}
      />
      <IS.InputStyle
        placeholder="내용을 입력해주세요"
        value={todoContent}
        onChange={onChangeTodoContent}
      />
      <IS.InputBtnStyle type="submit">등록</IS.InputBtnStyle>
    </IS.InputFormStyle>
  );
};

export default Input;
