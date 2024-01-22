import React, { useReducer, useState } from 'react'


const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [...state, {
                id: Date.now(),
                text: action.payload,
                completed: false
            }];
        case 'TOGGLE_TODO' :
            return state.map(todo =>
                todo.id === action.payload ? {...todo, completed : !todo.completed} : todo);
        case 'REMOVE_TODO' :
            return state.filter(todo => todo.id!==action.payload);
        default:
            return state;               
    }
}

const Test = () => {

    const [todos, dispatch] = useReducer(todoReducer, [
      
])

    const [newTodo, setNewTodo] = useState('')

    const handleInputChange = (e) => setNewTodo(e.target.value)

    const handleAddTodo = () => {
        if(newTodo.trim() !== '') {
            dispatch({type: 'ADD_TODO', payload: newTodo})
            setNewTodo('')
        }
    }

    const handleToggleTodo = (id) => dispatch({type: 'TOGGLE_TODO', payload: id})
    const handleRemoveTodo = (id) => dispatch({type: 'REMOVE_TODO', payload: id})

    
  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo.id)}
                        
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))
            }
        </ul>
        <div>
            <input type="text" value={newTodo} onChange={handleInputChange}/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    </div>
  )
}

export default Test