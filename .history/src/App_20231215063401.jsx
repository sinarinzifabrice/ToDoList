import { useImperativeHandle, useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setnewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(),
        title: newItem, completed: false},
      ]
    })

    setnewItem("");
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map( todo =>{
        if(todo.id === id){
          return {...todo, completed }
        }
        return todo
      })
    } )
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
        <>
         
          <h1 className="header">Todo List</h1>
          <ul className="list">
          {todos.length === 0 && "Empty Liste"}
            {todos.map( todo => {
              return(<li key={todo.id}>
                <label>
                  <input type="checkbox" 
                  onChange={e => toggleTodo(todo.is, e.target.checked)}
                  checked={todos.completed}/>
                  {todo.title}
                  <button onClick={()=> deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                </label>
              </li>)
                
            })}
              
          </ul>
        </>
  )
}