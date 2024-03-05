import * as QR from "../util/logic/todoListQuery";

const TodoList = () => {
  const { isLoading, isError, data } = QR.useTodoList();
  const deleteMutation = QR.useDeleteTodoMutation();
  const updateMutation = QR.useUpdateTodoMutation();

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <button onClick={() => updateMutation.mutate(item)}>
              {item.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteMutation.mutate(item.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
