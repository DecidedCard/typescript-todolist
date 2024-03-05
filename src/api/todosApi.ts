import { TodoList } from "../util/type";
import todos from "./todos";

export const getTodos = async (): Promise<TodoList[]> => {
  try {
    const res = await todos.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const writeTodo = async (newTodo: TodoList): Promise<TodoList> => {
  const res = await todos.post<TodoList>("/todos", newTodo);
  return res.data;
};
