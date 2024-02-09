const BASE_URL = "http://localhost:8000/api";

export async function getReq(endpoint: string) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "GET",
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function postReq(endpoint: string) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "POST",
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function putReq(endpoint: string) {
  const response = await fetch(BASE_URL + endpoint, {
    method: "PUT",
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
