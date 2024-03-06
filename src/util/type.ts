export type TodoList = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TodoListPropsType = {
  checkDone: boolean;
};
