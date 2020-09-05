import Axios from "axios";

const fetchData = () => {
  return async function(dispatch) {
    dispatch({ type: "FETCHING", payload: null });
    try {
      //TODO: add url endpoint
      var res = await Axios.get("");
      var data = res.data;
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err });
    }
    dispatch({ type: "FETCH_DONE", payload: data });
  };
};

export default fetchData;
