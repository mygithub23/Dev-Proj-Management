import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// export this function so it can be used inside combineReducers function inside --> /reducers/index.js

// eslint-disable-next-line import/no-anonymous-default-export
export default (projects = [], action) => {
  // set the default state projects = [] (because we are inside the projects reducer we can renamethe state to projects) to an empty array
  switch (action.type) {
    case FETCH_ALL:
      // action will work after I connect redux to the store
      return action.payload;
    case LIKE: // remove this option
      return projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      );
    case CREATE:
      return [...projects, action.payload];
    case UPDATE:
      return projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      );
    case DELETE:
      return projects.filter((project) => project._id !== action.payload);
    default:
      return projects;
  }
};
