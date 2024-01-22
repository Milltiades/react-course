import React, { useReducer, useState } from "react";

const Test1 = () => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ];
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducerFunc, []);

  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if(newTodo.trim !== '') {
        dispatch({type: "ADD_TODO", payload: newTodo})
        setNewTodo('')
    }
   
    
  };

  const handleToggleTodo = (id) => {
    dispatch({type: 'TOGGLE_TODO', payload: id})
  }
  const handleRemoveTodo = (id) => {
    dispatch({type: 'REMOVE_TODO', payload: id})
  }

  return (
    <div>
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{display: 'flex', padding: '2px', gap: '5px', height: '30px', alignItems: 'center', justifyContent: 'start'}}>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)}/>
                        <h1 style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</h1>
                        <button onClick={() => handleRemoveTodo(todo.id)}>remove</button>
                    </li>
                ))}
            </ul>
        </div>
      <div>
        <input type="text" onChange={handleInputChange} value={newTodo}/>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Test1;
