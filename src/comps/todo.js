import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const todo = ({task,deletetodo,editTodo}) => {
  return (
    <div className='todo_item'>
        <div className='todo_item_info'>
            <p>
                {task.task}
            </p>
        </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faPenToSquare} id='pen' onClick={() => editTodo(task.id)}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} id="trash" onClick={()=> deletetodo(task.id)}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default todo
