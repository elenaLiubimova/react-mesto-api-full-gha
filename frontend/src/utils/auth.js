import { token } from "./constants";

export const BASE_URL = "https://api.elenaliubimova.nomoredomains.monster";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const register = (email, password) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = () => {
  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data);
};
