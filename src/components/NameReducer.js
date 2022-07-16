export default function NameReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        name: action.payload,
      };

    default:
      throw new Error();
  }
}
