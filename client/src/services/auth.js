import { api } from "./api";

export function getUserById(user) {
  return (
    api
      // .get("/auth/profile/6245beb6ce9ff68ea1a2aa4f")
      .get(`/auth/profile/${user.id}`, { withCredentialst: true })
      .then((res) => res.data)
  );
}

export function attemptUserLogin(user) {
  // return api.post("/auth/login", user).then((res) => console.log(res.data));
  return api
    .post("/auth/login", user, { withCredentials: true })
    .then((res) => console.log(res.data))
    .then((res) => res.data);
}
