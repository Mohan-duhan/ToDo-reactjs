import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let MarkAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let MarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input placeholder=" Add a Task " value={newTodo} onChange={updateTodoValue}></input>
      <br></br>
      <br></br>

      <button onClick={addewTask}>Add Task</button>

      <br></br>
      <hr></hr>
      <br></br>

      <b>
        <i>
          <h2>This is our Todo List :- </h2>
        </i>
      </b>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? {
                      textDecorationLine: "line-through",
                      textDecorationColor: "green",
                      textDecorationThickness: "5px",
                    }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ol>
      <br></br>
      <button onClick={MarkAllDone}>Mark All As Done</button>
    </div>
  );
}
