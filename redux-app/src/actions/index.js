export function createUser(obj) {
  let action = {
    type: "CREATE_USER",
    payLoad: obj
  };
  return action;
}
export function deleteUser(i) {
  let action = {
    type: "DELETE_USER",
    payLoad: i
  };
  return action;
}
export function updateUser(obj) {
  let action = {
    type: "UPDATE_USER",
    payLoad: obj
  };
  return action;
}
