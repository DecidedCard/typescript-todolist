import * as QR from "../util/logic/todoListQuery";
import { TodoListType, TodoListPropsType } from "../util/type";
import * as TS from "../style/todoListStyle";

const TodoList = ({ checkDone }: TodoListPropsType) => {
  const { isLoading, isError, data } = QR.useTodoList();
  const deleteMutation = QR.useDeleteTodoMutation();
  const updateMutation = QR.useUpdateTodoMutation();

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

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <TS.TodoListSection>
      <TS.TodoListTitleStyle>
        {checkDone ? "Done!" : "Working..."}
      </TS.TodoListTitleStyle>
      <TS.TodoListContainer>
        {data?.map((item) => {
          return checkDone === item.isDone ? (
            <TS.TodoContainer key={item.id}>
              <p>
                <label>제목: </label>
                {item.title}
              </p>
              <p>
                <label>내용: </label>
                {item.content}
              </p>
              <TS.TodoBtnDivStyle>
                <TS.TodoBtnStyle
                  onClick={() => onClickUpdateHandler(item)}
                  $checkBtn={false}
                >
                  {item.isDone ? "취소" : "완료"}
                </TS.TodoBtnStyle>
                <TS.TodoBtnStyle
                  onClick={() => onClickDeleteHandler(item.id)}
                  $checkBtn={true}
                >
                  삭제
                </TS.TodoBtnStyle>
              </TS.TodoBtnDivStyle>
            </TS.TodoContainer>
          ) : (
            false
          );
        })}
      </TS.TodoListContainer>
    </TS.TodoListSection>
  );
};

export default TodoList;
