import * as api from "../api";

export const fetchAllJobs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllJobs();
    dispatch({ type: "FETCH_ALL_JOBS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
