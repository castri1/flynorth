const ROOT_URL = 'http://localhost:3001';

let token = localStorage.token || "";

const headers = {
  'Accept': 'application/json',
  'Authorization': token ? `Bearer ${token}` : "",
  'content-type': 'application/json'
};

const toJSON = res => res.json();

function executeRequest(request) {
  return request()
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response;
    })
    .then(toJSON);
}

const GET = (path) => executeRequest(() => fetch(`${ROOT_URL}${path}`, { headers }));

const POST = (path, body) => {
  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(body)
  };
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, options));
}

const DELETE = (path) => {
  const options = {
    headers,
    method: 'DELETE'
  };
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, options));
}

const PUT = (path, body) => {
  const options = {
    headers,
    method: 'PUT',
    body: JSON.stringify(body)
  };
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, options));
}

export default {
  GET,
  POST,
  PUT,
  DELETE
};