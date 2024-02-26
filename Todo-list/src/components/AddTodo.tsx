import React from 'react';
import { ITodo } from "../interfaces";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IAddTodoProps {
  addNewTodo: (newTodo: ITodo) => void;
  isEdit: boolean;
  title: string;
  author: string;
  date: Date | null;
  onChangeTitle: (value: string) => void;
  onChangeAuthor: (value: string) => void;
  handleDateChange: (value: Date | null) => void;
  updateTodo: (updatedTodo: ITodo) => void;
  editedTodo: ITodo | null;
}

const AddTodo = (props: IAddTodoProps) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (props.isEdit) {
      if (props.title !== "" && props.author !== "" && props.date) {
        const updatedTodo: ITodo = {
          id: props.editedTodo?.id || '',
          author: props.author,
          title: props.title,
          date: props.date.toDateString(),
          completed: false,
        };
        props.updateTodo(updatedTodo);
      }
    } else {
      if (props.title !== "" && props.author !== "" && props.date) {
        const newTodo: ITodo = {
          id: Date.now().toString(),
          author: props.author,
          title: props.title,
          date: props.date.toDateString(),
          completed: false,
        };
        props.addNewTodo(newTodo);
      }
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="wrapper">
        <input className="title" type="text" placeholder="Enter the Title of Todo.." value={props.title} onChange={(e) => props.onChangeTitle(e.target.value)} />
        <DatePicker className="datepicker" selected={props.date} onChange={(date) => props.handleDateChange(date)} />
      </div>
      <div className="wrapper">
        <input className="author" type="text" placeholder="Enter the Author of Todo.." value={props.author} onChange={(e) => props.onChangeAuthor(e.target.value)} />
        <button type="submit" className="add-btn">{props.isEdit ? 'UPDATE' : 'ADD'}</button>
      </div>
    </form>
  )
}

export default AddTodo;
