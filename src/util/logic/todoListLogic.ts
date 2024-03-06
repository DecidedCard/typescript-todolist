import { TodoListType } from "../type";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "./todoListQuery";

const useTodoList = () => {
  const deleteMutation = useDeleteTodoMutation();
  const updateMutation = useUpdateTodoMutation();

  const onClickUpdateHandler = (item: TodoListType) => {
    const result = window.confirm(
      item.isDone ? "아직 진행중이신가요?" : "완료하시겠습니까?"
    );
    if (result) {
      updateMutation.mutate(item);
      alert("변경하였습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };

  const onClickDeleteHandler = (id: string) => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate(id);
      alert("삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };

  return { onClickUpdateHandler, onClickDeleteHandler };
};

export default useTodoList;
