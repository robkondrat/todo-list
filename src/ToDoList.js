import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map(toDo => {
        return (
          <ToDo toDo={toDo} handleToggle={handleToggle} handleFilter={handleFilter} />
        )
      })}
      <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}

export default ToDoList;