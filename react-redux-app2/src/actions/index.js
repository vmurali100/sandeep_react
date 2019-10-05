export function addUser(payLoad) {
  let action = {
    type: "ADD_USER",
    payLoad
  };
  return action;
}

export function updateUser(payLoad) {
  let action = {
    type: "UPDATE_USER",
    payLoad
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
