import { useEffect, useState } from 'react';
import TodosList from './components/TodosList';
import {data} from './data';
import { ITodo } from './interfaces';
import Header from './components/Header';
import AddTodo from './components/AddTodo';


function App() {

  const [todos, setTodos] = useState<ITodo[]>(data);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<ITodo | null>(null);

  const [isFiltred, setIsFiltred] = useState<boolean>(false);
  const [todysTodos, setTodaysTodos] = useState<ITodo[] | null>(null);

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());

  const onChangeTitle = (value:string) => {
    setTitle(value);
  };

  const onChangeAuthor = ( value:string) => {
    setAuthor(value);
  };

  const handleDateChange = ( value: Date | null) => {
    setDate(value);
  };

  const addNewTodo = (newTodo: ITodo) => {
    setTodos((prev) => [newTodo, ...prev])
    setTitle('')
    setAuthor('')
    setDate(new Date())
  }

  const completedToggle = (todo: ITodo) => {
    todos.map(item => {
      if (item.id === todo.id){
        item.completed = !item.completed
      }
    })
  }

  const deletTodo = (todo: ITodo) => {
    const filteredTodos: ITodo[] = todos.filter (item => item.id !== todo.id )
    setTodos(filteredTodos);
  }

  const moveTodo = (todo: ITodo, direction: string) => {
    todos.map (item => {
      if (item.id === todo.id){
        const currentIndex: number = todos.indexOf(item);
        const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
        if (newIndex < 0 || newIndex >= todos.length){
          return;
        }
        const updatedTodos = [...todos];
        const currentTodo = updatedTodos[currentIndex];
        updatedTodos[currentIndex] = updatedTodos[newIndex];
        updatedTodos[newIndex] = currentTodo;
        setTodos(updatedTodos);
      }
    })
  }

  const editTodo = (todo:ITodo) => {
    todos.map(item => {
      if (item.id === todo.id){
        setIsEdit(true)
        setTitle(item.title)
        setAuthor(item.author)
        setDate(new Date(item.date))
        setEditedTodo(item)
      }
    })   
  }

  const updateTodo = (updatedTodo: ITodo) => {
    if (editedTodo){
      setTodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === editedTodo.id ? updatedTodo : item
        )
      );
      setTitle("");
      setAuthor("");
      setDate(new Date());
      setEditedTodo(null); 
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (isFiltred){
      const filtredTodos = todos.filter(item => item.date === new Date().toDateString())
      setTodaysTodos(filtredTodos)
    } else {
      setTodaysTodos(null)
    }
  }, [todos, isFiltred])

  return (
    <div className="app">
      <div className="gradient-bg">
        <div className="container">
          <Header
            isFiltred={isFiltred}
            handleFilter={() => setIsFiltred(!isFiltred)}
          />
        </div>
      </div>
      <div className="container">
        <AddTodo
          addNewTodo={addNewTodo}
          isEdit={isEdit}
          title={title}
          author={author}
          date={date}
          onChangeTitle={onChangeTitle}
          onChangeAuthor={onChangeAuthor}
          handleDateChange={handleDateChange}
          updateTodo={updateTodo}
          editedTodo={editedTodo}
        />
        <TodosList
          todos={isFiltred ? todysTodos || [] : todos}
          completedToggle={completedToggle}
          deletTodo={deletTodo}
          moveTodo={moveTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App
