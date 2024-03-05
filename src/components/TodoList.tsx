import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todosApi";

const TodoList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["todoList"],
    queryFn: getTodos,
  });
  console.log(data);
  if (isLoading) <div>로딩중입니다.</div>;

  return <div></div>;
};

export default TodoList;
