import { useTodoList } from "../util/logic/todoListQuery";

const TodoList = () => {
  const { isLoading, isError, data } = useTodoList();

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
            <button>{item.isDone ? "취소" : "완료"}</button>
            <button>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
