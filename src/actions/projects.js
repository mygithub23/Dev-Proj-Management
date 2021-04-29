import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// import every action as api. this will allows us to use all functions (fetchProjects,...) inside /api/index.js 
import * as api from '../api/index.js';

/* 
Action creators: functions below they return actions

declare getProjects action
we have to use async await to get data asynchronously. 
we cannot use it inside getProjects action.  
However Redux-Thunk allows us to specify a second arrow function.
Use this arrow function as property we get access to dispatch 
function to get the data asyncronously.
getPojects function return another function diapatch
Export getProjects function then imported it inside /App.js 
where we can manipulate the data.

When getProjects action is dispatched from /App.js, then immediatly 
go to reducers (/reducers/projects ) to handle functions inside the Switch block.
These functions retrieve data from /actions/projects.js

*/ 

export const getProjects = () => async (dispatch) => {
  try {
    /*
    fetch all the data (projects) from the api
    */
    const { data } = await api.fetchProjects();
    /*
    dispatch action object of type FETCH_ALL property
    payload is the data where we store all our projects.
    With Redux-Hook requires to dispatch the aciton object instead of return it.
    Here the action object type is FETCH_ALL which will fetch all the data and 
    send it through action payload: data. 
    In the reducer we return action.payload
    */
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};





export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const UpdateDeveloper = (id) => async (dispatch) => {
  try {
    const { data } = await api.UpdateDeveloper(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// export const likeProject = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likeProject(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
