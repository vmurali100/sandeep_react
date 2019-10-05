const defaultState = {
  count: 10
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "UPDATE":
      let count = state.count + 1;
      return { count };

    default:
      break;
  }
  return state;
}
