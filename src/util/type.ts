export type TodoListType = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TodoListPropsType = {
  checkDone: boolean;
};
