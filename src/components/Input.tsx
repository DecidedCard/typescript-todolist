import { useInput } from "../hooks/useInput";

const Input = () => {
  const [todoTitle, onChangeTodoTitle] = useInput();
  return (
    <form>
      <input value={todoTitle} onChange={onChangeTodoTitle} />
      <button>등록</button>
    </form>
  );
};

export default Input;
