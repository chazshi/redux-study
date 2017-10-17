const visibilityFilter = (state="SHOW_ALL", action) => {
    // console.log("visibilityFilter");
    // console.log(action);
    switch(action.type) {
        case "SET_VISIBILITY": {
            // console.log("im in here!" + action.filter);
            return action.filter;
        }
        default:
            return state;
    }
}

export {visibilityFilter};