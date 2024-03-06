import * as QR from "../util/logic/todoListQuery";
import { TodoListPropsType } from "../util/type";
import * as TS from "../style/todoListStyle";
import useTodoList from "../util/logic/todoListLogic";

const TodoList = ({ checkDone }: TodoListPropsType) => {
  const { isLoading, isError, data } = QR.useTodoList();
  const { onClickUpdateHandler, onClickDeleteHandler } = useTodoList();

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
