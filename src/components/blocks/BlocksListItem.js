import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Api from '../../utils/http/ApiClient';

export default function BlocksListItem(props) {
  const deleteTaskHandler = async () => {
    await Api.delete(`/Task/${props.data.id}`);
    props.reFetch();
  };
  const updateTaskHandler = async () => {};

  return (
    <ul>
      <li className="item">
        {props.data.task}
        <i className="icon">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={deleteTaskHandler}
            className="icon-delete"
          />
          <FontAwesomeIcon
            icon={faEdit}
            onClick={updateTaskHandler}
            className="icon-edit"
          />
        </i>
      </li>
    </ul>
  );
}
