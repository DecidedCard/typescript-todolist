import { useInput } from "../hooks/useInput";
import { useWriteTodoMutation } from "../util/logic/todoListQuery";
import { TodoListType } from "../util/type";
import * as IS from "../style/inputStyle";

const Input = () => {
  const [todoTitle, onChangeTodoTitle, setTodoTitle] = useInput();
  const [todoContent, onChangeTodoContent, setTodoContent] = useInput();
  const addMutation = useWriteTodoMutation();

  const onSubmitWriteHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoTitle && !todoContent) {
      alert("제목 및 내용을 입력해주시기 바랍니다.");
      return;
    }
    const newTodo: TodoListType = {
      id: crypto.randomUUID(),
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    addMutation.mutate(newTodo);
    setTodoTitle("");
    setTodoContent("");
  };
  return (
    <IS.InputFormStyle onSubmit={onSubmitWriteHandler}>
      <label>오늘의 할일을 입력해 주세요.</label>
      <IS.InputContainer>
        <div>
          <label>제목: </label>
          <IS.InputStyle
            placeholder="제목을 입력해주세요. 30자까지 입력가능합니다."
            value={todoTitle}
            onChange={onChangeTodoTitle}
            maxLength={30}
          />
        </div>
        <div>
          <label>내용: </label>
          <IS.InputStyle
            placeholder="내용을 입력해주세요. 80자까지 입력가능합니다."
            value={todoContent}
            onChange={onChangeTodoContent}
            maxLength={80}
          />
        </div>
        <IS.InputBtnStyle type="submit">등록</IS.InputBtnStyle>
      </IS.InputContainer>
    </IS.InputFormStyle>
  );
};

export default Input;
