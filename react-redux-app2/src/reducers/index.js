export default function rootReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      var newUsers = [...state, action.payLoad];
      return newUsers;

    case "UPDATE_USER":
      newUsers = [...state];
      newUsers[action.payLoad.index] = action.payLoad.obj;
      return newUsers;
    case "DELETE_USER":
      newUsers = [...state];
      newUsers.splice(action.payLoad, 1);
      return newUsers;
    default:
      break;
  }
  return state;
}
