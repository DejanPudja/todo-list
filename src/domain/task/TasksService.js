import ApiClient from '../../utils/http/ApiClient';
let Api = new ApiClient();

export default class TasksService {
  static addTask(data) {
    return Api.post(data, 'http://localhost:3004/Task');
  }
  static getTask() {
    return Api.get('http://localhost:3004/Task');
  }
  static deleteTask(id) {
    return Api.delete(`http://localhost:3004/Task/${id}`);
  }
}
