import React, { useEffect, useState } from "react";
import { getAllTodos, updateTodos } from "../todomodel";
import rigoImage from "../../img/rigo-baby.jpg";


const localStorageKey = "ToDos_key";
const Home = () => {
  const [ToDos, setToDos] = useState([]);
  const [previousToDos, setPreviousToDos] = useState(ToDos);

  useEffect(async () => {

    const apiFetchedList = await getAllTodos();
    setToDos(apiFetchedList);
    setPreviousToDos(apiFetchedList);
  }, []);

  useEffect(() => {
 
    updateTodos(ToDos);
  }, [ToDos]);

  console.log(previousToDos);
  console.log(ToDos);
  console.log("=====");

  let onType = (event) => {
    if (event.code == "Enter") {
      let newToDos = [...ToDos];
      newToDos.push({ label: event.target.value, done: true });
     
      setToDos(newToDos);
      setPreviousToDos(ToDos);
    
      event.target.value = "";
    } else {

    }
    
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todos </h1>
      <div className="todo-input-container">

        <input
          className="todo-input"
          onKeyUp={onType}
          placeholder="Enter Todo"
        />
        {/* adding event listener */}
      </div>
      <ul className="todo-ul">
        {ToDos.map((todo, index) => {
          console.log("inside map");
          console.log(todo);
          return (
            <li key={index} className="todo-item bubble">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.done}
                onChange={() => {
                  let newToDos = [...ToDos];
                  newToDos[index].done = !todo.done;
                  setToDos(newToDos);
                  setPreviousToDos(ToDos);
                }}
              />
              <p className="todo-label">{todo.label}</p>
              <button
                className="todo-delete-item"
                onClick={() => {
                  let newToDos = [...ToDos];
                  newToDos.splice(index, 1);
                  setToDos(newToDos);
                  setPreviousToDos(ToDos);
                }}
              >
                🗑️
              </button>
            </li>
          );
        })}
      </ul>

      <div className="todo-footer">
        <p className="todo-items-left">
          {ToDos.length} items left

        </p>
        <button
          className="todo-undo-button"
          onClick={() => {
     
            setToDos(previousToDos);
          }}
        >
          Undo
        </button>
        <button
          className="todo-clearall-button"
          onClick={() => {
              setToDos([]);
            setPreviousToDos(ToDos);
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Home;

