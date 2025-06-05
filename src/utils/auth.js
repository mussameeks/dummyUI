export function login(email) {
  localStorage.setItem("user", JSON.stringify({ email }));
}
export function logout() {
  localStorage.removeItem("user");
}
export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
export function isLoggedIn() {
  return !!localStorage.getItem("user");
}