import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { TodoList } from "../type";
import { getTodos, writeTodo } from "../../api/todosApi";

const todoQueryKey = "todoList";
export const useTodoList = () => {
  const { isLoading, isError, data } = useQuery<TodoList[]>({
    queryKey: [todoQueryKey],
    queryFn: getTodos,
  });
  return { isLoading, isError, data };
};

export const useWriteTodoMutation = (): UseMutationResult<
  TodoList,
  Error,
  TodoList
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: writeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [todoQueryKey] });
    },
  });
};
