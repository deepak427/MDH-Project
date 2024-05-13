const jobReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case "FETCH_ALL_JOBS":
        return { data: action.payload };
      default:
        return state;
    }
  };
  
  export default jobReducer;