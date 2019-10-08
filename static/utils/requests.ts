export function isAuthorizated() {
  return !!localStorage.getItem("token");
}

/**
 * авторизация, если в кеше есть токен
 */
export function logIn() {
  return fetch("/api/log-in/", {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`
    }
  });
}

/**
 * Получение токена
 * @param user
 */
export function auth(user) {
  return fetch("/api/auth/", {
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
  return fetch("/api/sign-up/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem("token", json.token);
      console.log(json);
      return logIn();
    });
}

export function logout() {
  localStorage.removeItem("token");
}
