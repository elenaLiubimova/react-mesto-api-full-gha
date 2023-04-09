import { token } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "GET",
    });
  }

  getProfileInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "GET",
    });
  }

  setProfileInfo(name, job) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    });
  }

  addNewCard(name, link) {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  deleteCard(id) {
    return this._request(`${this._baseUrl}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  addLike(id) {
    return this._request(`${this._baseUrl}/cards/${id}/likes`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  deleteLike(id) {
    return this._request(`${this._baseUrl}/cards/${id}/likes`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.deleteLike(id);
    }

    return this.addLike(id);
  }

  changeAvatar(avatar) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(avatar),
    });
  }
}

export const api = new Api({
  // baseUrl: "https://api.elenaliubimova.nomoredomains.monster",
  baseUrl: "http://localhost:3000",
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
