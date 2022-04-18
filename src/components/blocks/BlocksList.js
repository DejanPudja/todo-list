import React, { useEffect, useState } from 'react';
import PartInputField from '../parts/PartInpuField';
import BlocksListItems from './BlocksListItems';
import Api from '../../utils/http/ApiClient';

export default function BlocksList() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let tasks = await Api.get('/Task');
    setTasks(tasks.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <h2>Task List</h2>
      <PartInputField type={'text'} reFetch={getTasks} />
      <hr />
      <BlocksListItems data={tasks} reFetch={getTasks} />
    </div>
  );
}
