import todos from "./todos";

type todoList = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export const getTodos = async (): Promise<todoList[]> => {
  try {
    const res = await todos.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
