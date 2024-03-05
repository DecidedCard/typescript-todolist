import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { TodoList } from "../type";
import {
  deleteTodo,
  getTodos,
  updateTodo,
  writeTodo,
} from "../../api/todosApi";

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

export const useDeleteTodoMutation = (): UseMutationResult<
  TodoList,
  Error,
  string
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [todoQueryKey] });
    },
  });
};

export const useUpdateTodoMutation = (): UseMutationResult<
  TodoList,
  Error,
  TodoList
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [todoQueryKey] });
    },
  });
};
