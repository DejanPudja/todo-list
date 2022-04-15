export default class ApiClient {
  async get(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  async post(data, url) {
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
  async put(data, url) {
    try {
      let response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
  async delete(url) {
    try {
      let response = await fetch(url, {
        method: 'DELETE',
      });
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
}
