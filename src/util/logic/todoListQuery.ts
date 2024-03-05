import { useQuery } from "@tanstack/react-query";
import { todoList } from "../type";
import { getTodos } from "../../api/todosApi";

const todoQueryKey = "todoList";
export const useTodoList = () => {
  const { isLoading, isError, data } = useQuery<todoList[]>({
    queryKey: [todoQueryKey],
    queryFn: getTodos,
  });
  return { isLoading, isError, data };
};
