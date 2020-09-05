const initialState = 0;

const countReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};

export default countReducer
