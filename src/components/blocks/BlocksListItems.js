import React, { useEffect, useState } from 'react';
import BlocksListItem from './BlocksListItem';

export default function BlocksListItems(props) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(props.data);
  });

  return (
    <div className="list_items">
      {task.map((task, index) => {
        return (
          <BlocksListItem data={task} key={index} reFetch={props.reFetch} />
        );
      })}
    </div>
  );
}
