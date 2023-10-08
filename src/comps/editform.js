import React, { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {

    const [value,setValue] = useState(task.task)

    const inputHandler = (e) => {
        setValue(e.target.value)
    }
    const submitHandler = (e) => {
      e.preventDefault()

      
      if(value !== ""){

        editTodo(value,task.id)
      }else{
        console.log("empty")
      }
      setValue("")
    }



  return (
    <div>
      <form className='todoform' >
        {/* <input type="text" className='todo-input' placeholder='what is the task today?' /> */}
        <input type="text" className='todo-input' placeholder='update it!! ' onChange={inputHandler} value = {value}/>
        <button  className='todo-btn' onClick={submitHandler} >
            update Item
        </button>
    </form>
    </div>
  )
}

export default EditTodoForm
