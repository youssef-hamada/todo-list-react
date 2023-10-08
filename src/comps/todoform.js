import React, { useState } from 'react'

const Todoform = ({addTodo}) => {

    const [value,setValue] = useState("")

    const inputHandler = (e) => {
        setValue(e.target.value)
    //     // console.log(value)
    }
    const submitHandler = (e) => {
      e.preventDefault()
      // setValue(e.target.value)
      if(value !== ""){

        addTodo(value)
      }else{
        console.log("empty")
      }
      setValue("")
    }



  return (
    <div>
      <form className='todoform' >
        {/* <input type="text" className='todo-input' placeholder='what is the task today?' /> */}
        <input type="text" className='todo-input' placeholder='what is the task today?' onChange={inputHandler} value = {value}/>
        <button  className='todo-btn' onClick={submitHandler} >
            Add item
        </button>
    </form>
    </div>
  )
}

export default Todoform
