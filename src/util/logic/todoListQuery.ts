import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { TodoListType } from "../type";
import {
  deleteTodo,
  getTodos,
  updateTodo,
  writeTodo,
} from "../../api/todosApi";

const todoQueryKey = "todoList";

export const useTodoList = () => {
  const { isLoading, isError, data } = useQuery<TodoListType[]>({
    queryKey: [todoQueryKey],
    queryFn: getTodos,
  });
  return { isLoading, isError, data };
};

export const useWriteTodoMutation = (): UseMutationResult<
  TodoListType,
  Error,
  TodoListType
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
  TodoListType,
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
  TodoListType,
  Error,
  TodoListType
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [todoQueryKey] });
    },
  });
};
