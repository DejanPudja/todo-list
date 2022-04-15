import React, { useEffect, useState } from 'react';
import BlocksListItem from './BlocksListItem';
import TasksService from '../../domain/task/TasksService';

export default function BlocksListItems() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let tasks = await TasksService.getTask();
    setTasks(tasks);
  };
  useEffect(() => {
    getTasks();
  }, [tasks]);

  return (
    <div className="list_items">
      {tasks.map((task) => {
        return <BlocksListItem data={task} key={task.id} />;
      })}
    </div>
  );
}
