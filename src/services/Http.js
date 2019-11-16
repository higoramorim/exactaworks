export default class Http {
  static _request(url, method, data = {}) {
    const params = {
      method,
      headers: {
        'content-type': 'application/json'
      }
    }

    if(method !== 'GET') {
      params.data = data;
    }

    return fetch(url, params)
    .then((response) => response.json());
  }

  static get(url, data) {
    return Http._request(url, 'GET', data);
  }

  static post(url, data) {
    return Http._request(url, 'POST', data);
  }
}