import { useState } from "react";
import { ITodo } from "../interfaces";

interface ITodosListItemProps {
  todo: ITodo;
  completedToggle: (todo: ITodo) => void;
  deletTodo: (todo: ITodo) => void;
  moveTodo: (todo: ITodo, direction: string) => void;
  editTodo: (todo: ITodo) => void;
}

const TodosListItem: React.FC<ITodosListItemProps> = (props) => {

  const [checkValue, setCheckValue] = useState<boolean>(props.todo.completed);

  const handleCheckClick: React.MouseEventHandler<HTMLInputElement> = () => {
    props.completedToggle(props.todo);
    setCheckValue(!checkValue)
  };

  const handleClick: React.MouseEventHandler<HTMLSpanElement> = () => {
    if (props.todo.completed) {
      props.deletTodo(props.todo);
    }
  };

  return (
    <div className="todos-list-item" id={props.todo.id.toString()}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          defaultChecked={checkValue}
          onClick={handleCheckClick}
        />
      </div>
      <div
        className={
          props.todo.completed ? "info-wrapper completed" : "info-wrapper"
        }
      >
        <h3 className="title">{props.todo.title}</h3>
        <div className="author-date-wrapper">
          <p className="author">{props.todo.author}</p>
          <p className="date">{props.todo.date}</p>
        </div>
      </div>
      <div className="btns-wrapper">
        <span className="move-up-btn material-symbols-outlined" onClick={() => {props.moveTodo(props.todo, 'up')}}>move_up</span>
        <span className="move-down-btn material-symbols-outlined" onClick={() => {props.moveTodo(props.todo, 'down')}}>move_down</span>
      </div>
      <div className="btns-wrapper">
        <span className="edit-btn material-symbols-outlined" onClick={() => props.editTodo(props.todo)}>edit_note</span>
        <span
          className={
            props.todo.completed
              ? "delete-btn material-symbols-outlined ready-to-delete"
              : "delete-btn material-symbols-outlined"
          }
          onClick={handleClick}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default TodosListItem