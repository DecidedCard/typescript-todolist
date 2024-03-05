import { todoList } from "../util/type";
import todos from "./todos";

export const getTodos = async (): Promise<todoList[]> => {
  try {
    const res = await todos.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const writeTodos = async (newTodos: todoList): Promise<todoList[]> => {
  try {
    const res = await todos.post("/todos", newTodos);
    return res.data;
  } catch (error) {
    console.error(error);
    alert("작성을 하지 못 했습니다.");
    return Promise.reject(error);
  }
};
