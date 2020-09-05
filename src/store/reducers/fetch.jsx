const initialState = { loading: true, data: null, error: null };

const fetchReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "FETCHING":
      return { loading: true, data: null, error: null };
    case "FETCH_DONE":
      return { loading: false, data: actions.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, data: null, error: actions.payload };
    default:
      return state;
  }
};

export default fetchReducer
