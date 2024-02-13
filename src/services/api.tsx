const BASE_URL = "http://localhost:8000/api";

export async function getReq(endpoint: string) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "GET",
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function postReq(endpoint: string, data) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function putReq(endpoint: string, data) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function deleteReq(endpoint: string) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
  });
  const responseBody = await response.json();
  return responseBody;
}
