import { TodoListType } from "../util/type";
import todos from "./todos";

export const getTodos = async (): Promise<TodoListType[]> => {
  try {
    const res = await todos.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const writeTodo = async (
  newTodo: TodoListType
): Promise<TodoListType> => {
  try {
    const res = await todos.post("/todos", newTodo);
    return res.data;
  } catch (error) {
    console.error(error);
    alert("작성을 하지 못 했습니다.");
    return Promise.reject(error);
  }
};

export const deleteTodo = async (id: string): Promise<TodoListType> => {
  try {
    const res = await todos.delete(`/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const updateTodo = async (item: TodoListType): Promise<TodoListType> => {
  const changeTodo = { ...item, isDone: !item.isDone };
  try {
    const res = await todos.patch(`/todos/${item.id}`, changeTodo);
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
