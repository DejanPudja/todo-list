import PartInputField from '../parts/PartInpuField';
import BlocksListItems from './BlocksListItems';

export default function BlocksList() {
  return (
    <div className="container">
      <h2>Task List</h2>
      <PartInputField type={'text'} />
      <hr />
      <BlocksListItems />
    </div>
  );
}
