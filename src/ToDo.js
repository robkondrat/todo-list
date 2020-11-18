import React from 'react';

const ToDo = ({toDo}) => {
  return (
    <div>
      <div className={toDo.complete ? "strike" : ""}>
        {toDo.task}
      </div>
    </div>
  )
}

export default ToDo;