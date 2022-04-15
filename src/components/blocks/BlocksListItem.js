import Service from '../../domain/task/TasksService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function BlocksListItem(props) {
  const deleteTaskHandler = () => {
    Service.deleteTask(props.data.id);
  };
  return (
    <ul>
      <li className="item">
        {props.data.task}
        <i className="icon">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={deleteTaskHandler}
            className="icon"
          />
        </i>
      </li>
    </ul>
  );
}
