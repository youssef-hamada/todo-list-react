import React, { useState } from 'react'
import Todoform from "./todoform.js"
import EditTodoForm from './editform.js'
import {v4 as uuidv4 } from "uuid"
import Todo from "./todo.js"
uuidv4()

const Todowrapper = () => {
  const [ todos,setTodos ] = useState([])

  const addTodo = (todo) => {
    setTodos( [...todos,{id: uuidv4(), task:todo , completed : false, isEditing:false }])
    
  }

  React.useEffect(() => {
    console.log(todos)
  },[todos])


  const deletetodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ))
  }

  const editTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing  } : todo  ))
  }

  const editTask = (task , id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
  }


  return (
    <div className='todowrapper'>

      <Todoform addTodo={addTodo}/>
      {
        todos.map((todo,index) =>  (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task = {todo} />
          ) : (

            <Todo task={todo} key={index} deletetodo={deletetodo} editTodo={editTodo} />
          )
        )  )
      }
      {/* <Todo task={todos.task} /> */}

    </div>
  )
}

export default Todowrapper
