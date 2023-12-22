import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <ul className="list">
          {todos.length === 0 && "Empty Liste"}
            {todos.map( todo => {
              return(
                <TodoItem id={todo.id} completed={todo.completed} title={todo.title}/>
              )
                
            })}
              
          </ul>
  )
}
