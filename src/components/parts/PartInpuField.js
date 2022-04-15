import React, { useState } from 'react';
import Service from '../../domain/task/TasksService';

export default function PartInputField(props) {
  const [enteredTask, setEnteredTask] = useState('');

  const addTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let task = {
      task: enteredTask,
    };
    if (enteredTask !== '') {
      Service.addTask(task);
      setEnteredTask('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type={props.type}
          className="task_field"
          placeholder="New Task"
          value={enteredTask}
          onChange={addTaskHandler}
        />
        <button type="submit" className="btn_add">
          Add Task
        </button>
      </form>
    </div>
  );
}
