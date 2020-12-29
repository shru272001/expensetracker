const initstate = {
    
  };
  const projectRed = (state = initstate, action) => {
    switch (action.type) {
      case "ADDED_EXPENSE   ":
        console.log("success");
        return state
      case "ADDED_EXPENSE_ERR":
        console.log("failed");
        return state;
      default:
        return state;
    }
  };
  export default projectRed;
  