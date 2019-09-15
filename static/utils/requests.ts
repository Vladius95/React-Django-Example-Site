export function isAuthorizated() {
  return !!localStorage.getItem("token");
}

/**
 * авторизация, если в кеше есть токен
 */
export function auth() {
  return fetch("/api/auth", {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`
    }
  }).then(res => console.log("auth", res.json()));
}

/**
 * Получение токена
 * @param user
 */
export function logIn(user) {
  fetch("/api/auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem("token", json.token);
    });
}

export function signUp(user) {
  fetch("/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem("token", json.token);
    });
}

export function logout() {
  localStorage.removeItem("token");
}
