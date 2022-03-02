import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Form from './Form';
import Todos from './Todos';

function App() {

  const [todoList, setTodoList] = useState([
    {
      title: "todo1",
      description: "lorem ipsum"
    },
    {
      title: "todo2",
      description: "lorem ipsum"
    },
    {
      title: "todo3",
      description: "lorem ipsum"
    },

  ]);

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <hr />
      <Todos todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
