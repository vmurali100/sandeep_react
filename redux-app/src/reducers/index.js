export default function rootReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_USER":
      var users = [...state, action.payLoad];
      return users;

    case "DELETE_USER":
      users = [...state];
      users.splice(action.payLoad, 1);
      return users;

    case "UPDATE_USER":
      users = [...state];
      users[action.payLoad.index] = action.payLoad.user;
      return users;

    default:
      return state;
  }
}
