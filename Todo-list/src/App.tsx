import { useState } from 'react';
import TodosList from './components/TodosList';
import {data} from './data';
import { ITodo } from './interfaces';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState<ITodo[]>(data);

  const addNewTodo = (newTodo: ITodo) => {
    setTodos((prev) => [newTodo, ...prev])
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

  return (
    <div className="app">
      <div className="gradient-bg">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <AddTodo addNewTodo={addNewTodo} />
        <TodosList todos={todos} completedToggle={completedToggle} deletTodo={deletTodo}/>
      </div>
    </div>
  );
}

export default App
