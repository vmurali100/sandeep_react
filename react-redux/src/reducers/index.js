const defaultState = {
  count: 10
};
export default function rootReducer(state = defaultState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "UPDATE":
      let count = state.count + 1;
      return { count };
      break;

    default:
      break;
  }
  return state;
}
